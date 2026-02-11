import { configureStore } from "@reduxjs/toolkit"

import categoriesSlice from "./categoriesSlice"
import productsSlice from "./productsSlice"
import { apiSlice } from "./apiSlice"

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
