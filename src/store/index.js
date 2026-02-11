import { configureStore } from "@reduxjs/toolkit"

import categoriesSlice from "./categoriesSlice"
import productsSlice from "./productsSlice"
import { apiSlice } from "./apiSlice"
import userSlice from "./userSlice"

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    users: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
