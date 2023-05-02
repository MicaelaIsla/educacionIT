import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";

const mainReducer = combineReducers({
  cart: cartReducer,
});

const store = configureStore({ reducer: mainReducer });

export default store;
