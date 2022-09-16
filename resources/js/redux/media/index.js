import { types } from "./types";

export const initialState = {
    data: [],
    loading: false,
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

        default:
            return state
    }
}