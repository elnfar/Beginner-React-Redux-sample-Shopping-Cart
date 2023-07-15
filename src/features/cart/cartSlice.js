import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartitems'

const initialState = {
    cartItems: cartItems,
    amount:4,
    total:0,
    isLoading:true
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state) => {
            state.cartItems = []
        },

        removeItem:(state,action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },

        incrementAmount:(state,action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            cartItem.amount = cartItem.amount + 1
        },
        decreaseAmount:(state,action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload)
            cartItem.amount = cartItem.amount - 1
        }
    }
})

export const {clearCart,incrementAmount,removeItem,decreaseAmount} = cartSlice.actions
// if we console log the cartSlice we have reducer method inside which controls actual initialState and we are exporting it now in order to use in store.js (store/index.js)

export default cartSlice.reducer