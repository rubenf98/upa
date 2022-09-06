import { types } from "./types";

export function openCart() {
    return {
        type: types.OPEN_CART
    };
}

export function closeCart() {
    return {
        type: types.CLOSE_CART
    };
}

export function setCart(cart) {
    return {
        type: types.SET_CART, payload: cart
    };
}

export function addCartItem(item) {
    return {
        type: types.ADD_CART_ITEM, payload: item
    };
}

export function removeCartItem(index) {
    return {
        type: types.REMOVE_CART_ITEM, payload: index
    };
}

