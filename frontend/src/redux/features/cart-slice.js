import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartProduct: localStorage.getItem('cart_products') ? JSON.parse(localStorage.getItem('cart_products')) : [],
  history: JSON.parse(localStorage.getItem('purchase_history')) || []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cart_product: (state, { payload }) => {
      const productIndex = state.cartProduct.findIndex(item => item.id === payload.id);
      if (productIndex >= 0) {
        state.cartProduct[productIndex].quantity += 1;
        toast.info('Increase product Quantity', { position: 'top-left' });
      } else {
        const tempProduct = { ...payload, quantity: 1 };
        state.cartProduct.push(tempProduct);
        toast.success(`${payload.title} added to cart`, { position: 'top-left' });
      }
      localStorage.setItem('cart_products', JSON.stringify(state.cartProduct));
    },
    decrease_quantity: (state, { payload }) => {
      const cartIndex = state.cartProduct.findIndex(item => item.id === payload.id);
      if (state.cartProduct[cartIndex].quantity > 1) {
        state.cartProduct[cartIndex].quantity -= 1;
        toast.error(`Decrease cart quantity`, { position: 'top-left' });
      }
      localStorage.setItem('cart_products', JSON.stringify(state.cartProduct));
    },
    remove_cart_product: (state, { payload }) => {
      state.cartProduct = state.cartProduct.filter(item => item.id !== payload.id);
      toast.error(`remove from your cart`, { position: 'top-left' });
      localStorage.setItem('cart_products', JSON.stringify(state.cartProduct));
    },
    clear_cart: (state, { payload }) => {
      const confirmMsg = window.confirm('Are you sure you want to clear your cart?');
      if (confirmMsg) {
        state.cartProduct = [];
      }
      localStorage.setItem('cart_products', JSON.stringify(state.cartProduct));
    },
    add_to_history: (state, { payload }) => {
      state.history.push(payload);
      localStorage.setItem('purchase_history', JSON.stringify(state.history));
      console.log(state.history);

    }
  },
});

export const { cart_product, remove_cart_product, decrease_quantity, clear_cart, add_to_history } = cartSlice.actions;

export const cartProduct = state => state.cart.cartProduct;
export const purchaseHistory = state => state.cart.history;

export default cartSlice.reducer;
