import { createSlice } from "@reduxjs/toolkit";

const initialCart = [];

export const cartSlice = createSlice({
  name: "cart",
  initialStae: initialCart,
  reducers: {},
});

export default cartSlice.reducer;
