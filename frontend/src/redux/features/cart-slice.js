import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartProduct:localStorage.getItem('cart_products') ? 
  JSON.parse(localStorage.getItem('cart_products')) : [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cart_product: (state,{payload}) => {
     const productIndex = state.cartProduct.findIndex(item => item.id === payload.id);
     if(productIndex >= 0){
      state.cartProduct[productIndex].quantity +=1;
      toast.info('Increase product Quantity', {
        position: 'top-left'
      })
     }
     else {
      const tempproduct = {...payload,quantity:1};
      state.cartProduct.push(tempproduct)
      toast.success(`${payload.title} added to cart`, {
        position: 'top-left'
      })
     }
     localStorage.setItem('cart_products', JSON.stringify(state.cartProduct))
    },
    decrease_quantity:(state,{payload}) => {
      const cartIndex = state.cartProduct.findIndex(item => item.id === payload.id);
      if(state.cartProduct[cartIndex].quantity > 1){
        state.cartProduct[cartIndex].quantity -= 1
        toast.error(`Decrease cart quantity`, {
          position: 'top-left'
        })
      }
      localStorage.setItem('cart_products', JSON.stringify(state.cartProduct))
    },
    remove_cart_product:(state,{payload}) => {
      state.cartProduct = state.cartProduct.filter(item => item.id !== payload.id);
      toast.error(`remove from your cart`, {
        position: 'top-left'
      })
      localStorage.setItem('cart_products', JSON.stringify(state.cartProduct))
    },
    clear_cart:(state,{payload}) => {
      const confirmMsg = window.confirm('Are you sure deleted your all cart items ?');
      if(confirmMsg){
        state.cartProduct = [];
      }
      localStorage.setItem('cart_products', JSON.stringify(state.cartProduct))
    }
  },
})

export const {cart_product,remove_cart_product,decrease_quantity,clear_cart} = cartSlice.actions;

export const cartProduct = state => state.cart.cartProduct;
export default cartSlice.reducer