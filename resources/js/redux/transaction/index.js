import { types } from "./types";

export const initialState = {
    data: [],
    meta: {},
    loading: false,
    loadingDownload: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.FETCH_TRANSACTIONS}_PENDING`:
        case `${types.VALIDATE_TRANSACTION}_PENDING`:
        case `${types.CREATE_TRANSACTION}_PENDING`:
        case `${types.UPDATE_TRANSACTION}_PENDING`:
            return {
                ...state,
                loading: true,
            };

        case `${types.FETCH_TRANSACTIONS}_REJECTED`:
        case `${types.CREATE_TRANSACTION}_REJECTED`:
        case `${types.UPDATE_TRANSACTION}_REJECTED`:
        case `${types.VALIDATE_TRANSACTION}_REJECTED`:
            return {
                ...state,
                loading: false,
            };

        case `${types.VALIDATE_TRANSACTION}_FULFILLED`:
        case `${types.UPDATE_TRANSACTION}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.map((record) =>
                    record.id === action.payload.data.data.id
                        ? action.payload.data.data
                        : record
                )
            };

        case `${types.CREATE_TRANSACTION}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: [action.payload.data.data, ...state.data]
            };

        case `${types.FETCH_TRANSACTIONS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
                meta: action.payload.data.meta
            };

        case `${types.DOWNLOAD_PROOF}_PENDING`:
            return {
                ...state,
                loadingDownload: true,
            };

        case `${types.DOWNLOAD_PROOF}_REJECTED`:
        case `${types.DOWNLOAD_PROOF}_FULFILLED`:
            return {
                ...state,
                loadingDownload: false,
            };

        default:
            return state
    }
}