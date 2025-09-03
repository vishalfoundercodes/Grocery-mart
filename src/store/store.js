// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api"; // RTK Query API slice
import userReducer from "./slices/userSlice"; // example slice for user
// import cartReducer from "./slices/cartSlice"; // optional: replace context logic

// export const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//     user: userReducer,
//     cart: cartReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware),
// });


export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
    // add cart later if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat(api.middleware)
});