import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_ALL_FROM_CART,
    REMOVE_ONE_FROM_CART,
    ADD_FROM_MENU,
} from "./Types";

export const addToCart = (id) => ({ type: ADD_TO_CART, payload: id });
//type: which function we want from the types of actions, payload: id of the product

export const delFromCart = (id, all = false) =>
    all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };

export const clearCard = () => ({ type: CLEAR_CART });

export const addFromMenu = (id) => ({ type: ADD_FROM_MENU, payload1: id });
