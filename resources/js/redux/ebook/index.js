import { types } from "./types";

export const initialState = {
    data: [],
    loading: false,
    loadingDownload: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.FETCH_EBOOKS}_PENDING`:
            return {
                ...state,
                loading: true,
            };
        case `${types.FETCH_EBOOKS}_REJECTED`:
            return {
                ...state,
                loading: false,
            };

        case `${types.FETCH_EBOOKS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
            };

        case `${types.DOWNLOAD_EBOOK}_PENDING`:
            return {
                ...state,
                loadingDownload: true,
            };

        case `${types.DOWNLOAD_EBOOK}_REJECTED`:
        case `${types.DOWNLOAD_EBOOK}_FULFILLED`:
            return {
                ...state,
                loadingDownload: false,
            };

        default:
            return state
    }
}