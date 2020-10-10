import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    display: (state, action) => {
      state.products = action.payload
    },
  },
})

export const { display } = productSlice.actions

export const getProducts = () => (dispatch) => {
  axios
    .get(`http://localhost:3001/products`)
    .then((r) => dispatch(display(r.data)))
}

export const selectProducts = (state) => state.products.products

export default productSlice.reducer
