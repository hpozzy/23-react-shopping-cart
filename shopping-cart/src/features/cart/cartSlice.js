import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },

  reducers: {
    additem: (state, action) => {
      const newItem = { ...action.payload }
      // let quantity = 1
      const foundItem = state.products.find((item) => item.id == newItem.id)
      if (foundItem) {
        console.log(newItem)
        foundItem.quantity = foundItem.quantity + 1
        state.products = state.products.map((item) =>
          item.id === foundItem.id ? foundItem : item
        )
      } else {
        state.products.push({ ...newItem, quantity: 1 })
      }
      // newItem.quantity = quantity
      // state.products.push(newItem)
      // state.products = state.products.map(item => item.id === newItem.id ? newItem : item)
    },
    subitem: (state, action) => {
      state.products = state.products.filter(
        (cart) => cart.id !== action.payload
      )
    },
  },
})

export const { additem, subitem } = cartSlice.actions

export const selectCart = (state) => state.cart.products

export default cartSlice.reducer
