import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

import { BASE_URL } from "../../utils/constants"

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/products`)
      return res.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    filtered: [],
    // related: [],
    isLoading: false,
  },
  reducers: {
    filterByPrice: (state, action) => {
      state.filtered = state.list.filter((item) => item.price < action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.list = payload
      state.isLoading = false
    })
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const { filterByPrice } = productsSlice.actions

export default productsSlice.reducer
