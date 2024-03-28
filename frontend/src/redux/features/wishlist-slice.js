import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  wishlist:localStorage.getItem('wishlist_products') ? 
  JSON.parse(localStorage.getItem('wishlist_products')) : [],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    add_to_wishlist:(state,{payload}) => {
      const productIndex = state.wishlist.findIndex(item => item.id === payload.id);
      if(productIndex >= 0){
        toast.error(`${payload.title} already added to wishlist`, {
          position: 'top-left'
        })
      }
      else {
        state.wishlist.push(payload);
        toast.success(`${payload.title} added to wishlist`, {
          position: 'top-left'
        })
      }
      localStorage.setItem('wishlist_products', JSON.stringify(state.wishlist))
    },
    remove_wishlist_product:(state,{payload}) => {
      state.wishlist = state.wishlist.filter(item => item.id !== payload.id);
      toast.error(`remove from your wishlist`, {
        position: 'top-left'
      })
      localStorage.setItem('wishlist_products', JSON.stringify(state.wishlist))
    }
  },
})

export const { add_to_wishlist,remove_wishlist_product } = wishlistSlice.actions;

export const wishlistItems = (state) => state.wishlist.wishlist;

export default wishlistSlice.reducer