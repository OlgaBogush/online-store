import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    currentUser: null,
    cart: [],
    isLoading: false,
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
  },
})

export default userSlice.reducer
export const { addItemToCart } = userSlice.actions
