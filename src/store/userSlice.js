import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

import { BASE_URL } from "../utils/constants"

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, body)
      return response.data
    } catch (err) {
      console.log(err)
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const loginUser = createAsyncThunk(
  "userSlice/loginUser",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, body)
      const login = await axios(`${BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${response.data.access_token}`,
        },
      })
      return login.data
    } catch (err) {
      console.log(err)
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const updateUser = createAsyncThunk(
  "userSlice/updateUser",
  async (body, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/users/${body.id}`, body)
      return response.data
    } catch (err) {
      console.log(err)
      return thunkAPI.rejectWithValue(err)
    }
  }
)

const addCurrentUser = (state, action) => {
  state.currentUser = action.payload
}

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    currentUser: null,
    cart: [],
    isLoading: false,
    formType: "signup",
    showForm: false,
  },
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart]
      const found = state.cart.find((item) => item.id === payload.id)
      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item
        })
      } else {
        newCart.push({ ...payload, quantity: 1 })
      }
      state.cart = newCart
    },
    toggleForm: (state, action) => {
      state.showForm = action.payload
    },
    toggleTypeForm: (state, action) => {
      state.formType = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, addCurrentUser)
    builder.addCase(loginUser.fulfilled, addCurrentUser)
    builder.addCase(updateUser.fulfilled, addCurrentUser)
  },
})

export default userSlice.reducer
export const { addItemToCart, toggleForm, toggleTypeForm } = userSlice.actions
