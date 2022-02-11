import { combineReducers } from "@reduxjs/toolkit";
import { shoppingReducer } from "./Reducers";

//Centraliza la lógica del movimiento del carrito
const reducer = combineReducers({
shopping: shoppingReducer

});

export default reducer;