import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add an item to the cart or increment its quantity if it already exists
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // Increment quantity if item exists
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new item to cart
      }
    },
    // Remove an item from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    // Update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update quantity
        if (itemToUpdate.quantity === 0) {
          // Remove item if quantity is 0
          state.items = state.items.filter((item) => item.name !== name);
        }
      }
    },
  },
});

// Export the action creators
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer as the default export
export default CartSlice.reducer;
