import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcCart } from "../../utils/calcCart";
import { getCartLS } from "../../utils/getCartLS";
import { CartItems, InitialState } from "./types";

const {items, totalPrice }= getCartLS();

const initialState: InitialState = {
    totalPrice,
    items,

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        updatePrice(state) {
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0);
        },

        addItem(state, action: PayloadAction<CartItems>) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                })
            }
        
            state.totalPrice = calcCart(state.items)
            

        },
        minusItem(state, action: PayloadAction<string>) {
            const findItem = state.items.find((obj) => obj.id === action.payload);
            if (findItem) {
                findItem.count--;
            }
            state.totalPrice = calcCart(state.items)
       
        },

        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(obj => obj.id !== action.payload)
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0);
        },
        clearItem(state) {
            state.items = [];
            state.totalPrice = calcCart(state.items)
            
        },
    },
})



export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
