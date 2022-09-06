import { types } from "./types";

export const initialState = {
    items: [],
    visible: false,
    total: 0,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {

        case `${types.OPEN_CART}`:
            return {
                ...state,
                visible: true,
            };

        case `${types.CLOSE_CART}`:
            return {
                ...state,
                visible: false,
            };

        case `${types.SET_CART}`:
            var total = 0;
            action.payload.map(record => total += record.price)
            return {
                ...state,
                items: action.payload,
                total: total
            };

        case `${types.REMOVE_CART_ITEM}`:
            var tempItems = [...state.items];
            var tempPrice = state.items[action.payload].price;
            tempItems.splice(action.payload, 1)

            return {
                ...state,
                items: tempItems,
                total: state.total - tempPrice
            };

        case `${types.ADD_CART_ITEM}`:
            return {
                ...state,
                items: [...state.items, action.payload],
                total: state.total + action.payload.price
            };
        default:
            return state
    }
}