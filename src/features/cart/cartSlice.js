import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((el) => el.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const i = state.cart.findIndex((cur) => cur.pizzaId === action.payload);
      state.cart.at(i).quantity += 1;
      state.cart.at(i).totalPrice =
        state.cart.at(i).quantity * state.cart.at(i).unitPrice;
    },

    decreaseItemQuantity(state, action) {
      const i = state.cart.findIndex((cur) => cur.pizzaId === action.payload);
      if (+state.cart.at(i).quantity <= 1) return;
      state.cart.at(i).quantity -= 1;
      state.cart.at(i).totalPrice =
        state.cart.at(i).quantity * state.cart.at(i).unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (store) => store.cart.cart;
