import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartitems'

const initialState = {
    cartItems: cartItems,
    amount:0,
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
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;

            state.cartItems.forEach((item) => {
                amount += item.amount
                total += item.amount * item.price
            })
            state.amount = amount
            state.total = total
        }
    }
})

export const {clearCart,incrementAmount,removeItem,decreaseAmount,calculateTotals} = cartSlice.actions
// if we console log the cartSlice we have reducer method inside which controls actual initialState and we are exporting it now in order to use in store.js (store/index.js)

export default cartSlice.reducer