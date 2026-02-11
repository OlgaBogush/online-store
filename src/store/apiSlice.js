import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { BASE_URL } from "../utils/constants"

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  tagTypes: ["Product"],
  endpoints: (build) => ({
    getProduct: build.query({
      query: ({ id }) => `/products/${id}`,
    }),
  }),
})

export const { useGetProductQuery } = apiSlice
