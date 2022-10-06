import { types } from "./types";

export const initialState = {
    data: [],
    loading: false,
    loadingDownload: false,
    video: {},
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.FETCH_VIDEO}_PENDING`:
            return {
                ...state,
                loading: true,
            };

        case `${types.FETCH_VIDEO}_REJECTED`:
            return {
                ...state,
                loading: false,
            };



        case `${types.FETCH_VIDEO}_FULFILLED`:
            return {
                ...state,
                loading: false,
                video: action.payload.data
            };

        case `${types.DOWNLOAD_AUDIO}_PENDING`:
        case `${types.DOWNLOAD_INSTRUCTIONS}_PENDING`:
            return {
                ...state,
                loadingDownload: true,
            };

        case `${types.DOWNLOAD_AUDIO}_REJECTED`:
        case `${types.DOWNLOAD_INSTRUCTIONS}_REJECTED`:
        case `${types.DOWNLOAD_AUDIO}_FULFILLED`:
        case `${types.DOWNLOAD_INSTRUCTIONS}_FULFILLED`:
            return {
                ...state,
                loadingDownload: false,
            };

        default:
            return state
    }
}