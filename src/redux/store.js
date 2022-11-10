import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "../features/cart/cartSlice";

export const store = configureStore({
  cart: cartReducers,
});
