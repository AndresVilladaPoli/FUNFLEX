import { createSlice } from '@reduxjs/toolkit';
import productData from '../../data/product-data';

const initialState = {
  products: productData,
};

export const productSlice = createSlice({
  name: 'products', 
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
  },
});

export const { deleteProduct } = productSlice.actions; 

export const selectProducts = (state) => state.products.products;
export default productSlice.reducer;
