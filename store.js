import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import the cart reducer

// Create the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cart reducer to the store
  },
});

// Export the store as the default export
export default store;
