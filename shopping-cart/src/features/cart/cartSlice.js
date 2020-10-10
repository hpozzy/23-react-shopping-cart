import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },

  reducers: {
    additem: (state, action) => {
      state.products.push(action.payload)
    },

    subitem: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    },
  },
})

export const { additem, subitem } = cartSlice.actions

export const selectCart = (state) => state.cart.products

export default cartSlice.reducer
