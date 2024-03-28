import { createSlice } from '@reduxjs/toolkit';
import productData from '../../data/product-data';

const initialState = {
  products:productData,
}

export const productSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {

  },
})

export const selectProducts = (state) => state.products.products;
export default productSlice.reducer
