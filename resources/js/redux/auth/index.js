import { types } from "./types";

export const initialState = {
    isAuthenticated: false,
    isAdmin: false,
    loading: false,
    currentUser: {
        courses: [],
        ebooks: []
    }
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.LOGIN}_PENDING`:
        case `${types.REGISTER}_PENDING`:
        case `${types.LOGOUT}_PENDING`:
        case `${types.FETCH_SELF}_PENDING`:
            return {
                ...state,
                loading: true
            };

        case `${types.REGISTER}_REJECTED`:
        case `${types.REGISTER}_FULFILLED`:
        case `${types.LOGOUT}_REJECTED`:
            return {
                ...state,
                loading: false
            };

        case `${types.FETCH_SELF}_REJECTED`:
        case `${types.LOGIN}_REJECTED`:
        case `${types.LOGOUT}_FULFILLED`:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
            };

        case `${types.LOGIN_SUCCESS}`:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
            };

        case `${types.FETCH_SELF}_FULFILLED`:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                isAdmin: action.payload.data.data.roles[0].name === "admin",
                currentUser: action.payload.data.data
            };

        case `${types.LOGIN}_FULFILLED`:
            return {
                ...state,
                loading: false,
                isAuthenticated: true
            };
        default:
            return state
    }
}