import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      const existing = state.items[plant.id];

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items[plant.id] = { ...plant, quantity: 1 };
      }
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        if (state.items[id].quantity > 1) {
          state.items[id].quantity -= 1;
        } else {
          delete state.items[id];
        }
      }
    },
    removeFromCart: (state, action) => {
      delete state.items[action.payload];
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } =
  cartSlice.actions;

export const selectCartItems = (state) => Object.values(state.cart.items);
export const selectCartItemCount = (state) =>
  Object.values(state.cart.items).reduce((sum, item) => sum + item.quantity, 0);
export const selectCartTotal = (state) =>
  Object.values(state.cart.items).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

export default cartSlice.reducer;
