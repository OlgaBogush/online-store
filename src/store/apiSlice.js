import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { BASE_URL } from "../utils/constants"
import { buildUrl } from "../helpers/common"

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["Product"],
  endpoints: (build) => ({
    getProduct: build.query({
      query: ({ id }) => `/products/${id}`,
    }),
    getProducts: build.query({
      query: (params) => buildUrl("/products", params),
    }),
  }),
})

export const { useGetProductQuery, useGetProductsQuery } = apiSlice
