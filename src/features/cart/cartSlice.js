import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from '../../cartitems'
import axios from "axios";

const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
    cartItems: [],
    amount:0,
    total:0,
    isLoading:true
}

//with fetch
// export const getCartItems = createAsyncThunk('cart/getCartItems',() => {
//     return fetch(url).then(resp => resp.json()).catch((err) => console.log(err))
// })

export const getCartItems = createAsyncThunk('cart/getCartItems', async(_,thunkAPI) => {
    try {
        const resp = await axios.get(url)
        return resp.data
    }catch(error) {
        return thunkAPI.rejectWithValue(error.response)
    }
})

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
    },
    extraReducers:{
        [getCartItems.pending]:(state) => {
            state.isLoading = true
        },
        [getCartItems.fulfilled]:(state,action) => {
            state.isLoading = false
            state.cartItems = action.payload
        },
        [getCartItems.rejected]:(state) => {
            state.isLoading = false
        },
    }
})

export const {clearCart,incrementAmount,removeItem,decreaseAmount,calculateTotals} = cartSlice.actions
// if we console log the cartSlice we have reducer method inside which controls actual initialState and we are exporting it now in order to use in store.js (store/index.js)

export default cartSlice.reducer