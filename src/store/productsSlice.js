import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

import { BASE_URL } from "../utils/constants"

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios(`${BASE_URL}/products`)
      return response.data
    } catch (err) {
      console.log(err)
      return thunkAPI.rejectWithValue(err)
    }
  }
)

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    list: [],
    filtered: [],
    related: [],
    isLoading: false,
  },
  reducers: {
    filterByPrice: (state, action) => {
      state.filtered = state.list.filter((item) => item.price < action.payload)
    },
    getRelatedProducts: (state, action) => {
      const related = state.list.filter(
        (item) => item.category.id === action.payload
      )
      state.related = related.sort(() => 0.5 - Math.random())
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.list = action.payload
      state.isLoading = false
    })
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const { filterByPrice, getRelatedProducts } = productsSlice.actions
export default productsSlice.reducer
