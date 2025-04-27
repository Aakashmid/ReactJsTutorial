// src/redux/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {

    addToCart: (state, action) => {
        const item = state.cartItems.find((item) => item.id === action.payload.id);
        if (!item) {
            state.cartItems.push({ ...action.payload });
        }
    },

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity++;
    },

    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity--;
      }

    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
