
import { createSlice } from '@reduxjs/toolkit';
import productData from '../../data/product-data';


const getProductsFromLocalStorage = () => {
  const storedProducts = localStorage.getItem('products');
  return storedProducts ? JSON.parse(storedProducts) : productData;
};

const initialState = {
  products: getProductsFromLocalStorage(), 
};

export const productSlice = createSlice({
  name: 'products', 
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newId = Math.floor(Math.random() * 900) + 100; 
      const newProduct = {
        id: newId,
        ...action.payload,
      };
      state.products.push(newProduct); 
      localStorage.setItem('products', JSON.stringify(state.products)); 
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
      localStorage.setItem('products', JSON.stringify(state.products)); 
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions; 

export const selectProducts = (state) => state.products.products;
export default productSlice.reducer;
