import { createSlice, current } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push({
        item: action.payload,
        quantity: 1,
      });

      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (cartItem) => cartItem?.item?.card?.info?.id !== action.payload.id
      );
      localStorage.setItem('cart', JSON.stringify(state.items));
      toast.success("Deleted from Cart")
    },

    increaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      // console.log("INCREASE ITEM QUANTITY STATE " , JSON.parse(JSON.stringify(state)))
      // console.log("INCREASE ITEM QUANTITY ACTION" , action)
      const itemToIncrease = state.items.find(
        (cartItem) => cartItem?.item?.card?.info?.id === id
      );

      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(state.items));
        // console.log("added items array ", JSON.parse(JSON.stringify(state.items)))
      }
    },
    decreaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      const itemToDecrease = state.items.find(
        (cartItem) => cartItem?.item?.card?.info?.id === id
      );

      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cart');
      
    },
  },
});

export const selectItemsInCart = ({ cart }) => cart?.items ;


export const selectTotalPrice = ({ cart }) => {
    // console.log("CART-ITEMS PRICE " , cart)
  return cart?.items.reduce((total, cartItem) => {
   
    return  cartItem?.item?.card?.info?.price ? 
    total + cartItem?.item?.card?.info?.price * cartItem.quantity
                            :
    total + cartItem?.item?.card?.info?.defaultPrice * cartItem.quantity                 

  }, 0);
};


export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
