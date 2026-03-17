import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existing = state.items[plant.id];

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items[plant.id] = { ...plant, quantity: 1 };
      }
    },
    updateQuantity: (state, action) => {
      const { id, delta } = action.payload;
      const existing = state.items[id];
      if (!existing) return;

      const nextQuantity = existing.quantity + delta;
      if (nextQuantity <= 0) {
        delete state.items[id];
      } else {
        existing.quantity = nextQuantity;
      }
    },
    removeItem: (state, action) => {
      delete state.items[action.payload];
    },
  },
});

export const { addItem, updateQuantity, removeItem } = cartSlice.actions;

export const selectCartItems = (state) => Object.values(state.cart.items);
export const selectCartItemCount = (state) =>
  Object.values(state.cart.items).reduce((sum, item) => sum + item.quantity, 0);
export const selectCartTotal = (state) =>
  Object.values(state.cart.items).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

export default cartSlice.reducer;
