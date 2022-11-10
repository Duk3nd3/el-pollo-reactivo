import { createSlice } from "@reduxjs/toolkit";

const initialCart = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {},
});

export default cartSlice.reducer;
