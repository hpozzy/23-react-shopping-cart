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
      const foundItem = state.products.find((item) => item.id == newItem.id)
      if (foundItem) {
        foundItem.quantity = foundItem.quantity + 1
        state.products = state.products.map((item) =>
          item.id === foundItem.id ? foundItem : item
        )
      } else {
        state.products.push({ ...newItem, quantity: 1 })
      }
    },
    subitem: (state, action) => {
      state.products = state.products.filter(
        (cart) => cart.id !== action.payload
      )
    },
    addQuantity: (state, action) => {
      const newItem = { ...action.payload }
      const foundItem = state.products.find((item) => item.id == newItem.id)
      if (foundItem) {
        foundItem.quantity = foundItem.quantity + 1
        state.products = state.products.map((item) =>
          item.id === foundItem.id ? foundItem : item
        )
      } else {
        state.products.push({ ...newItem, quantity: 1 })
      }
    },
    subtractQuantity: (state, action) => {
      const newItem = { ...action.payload }
      const foundItem = state.products.find((item) => item.id == newItem.id)
      if (foundItem) {
        console.log(newItem)
        foundItem.quantity = foundItem.quantity - 1
        state.products = state.products.map((item) =>
          item.id === foundItem.id ? foundItem : item
        )
      } else {
        state.products.push({ ...newItem, quantity: 1 })
      }
    },
  },
})

export const {
  additem,
  subitem,
  addQuantity,
  subtractQuantity,
} = cartSlice.actions

export const selectCart = (state) => state.cart.products

export default cartSlice.reducer
