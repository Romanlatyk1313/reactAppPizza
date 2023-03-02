import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchPizzaParams, Pizza, Statuse } from "./types";




export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzaParams>('pizza/fetchPizzasStatus', async (params) => {
    const { sort, categories, page } = params;
    const res = await axios.get<Pizza[]>(
        `https://63d12055120b32bbe8f1be01.mockapi.io/items?page=${page}&limit=4&sortBy=${sort}&category=${categories}&order=desc`
    )
    console.log(categories);
    return res.data;
})





interface PizzaSliceState {
    items: Pizza[];
    status: Statuse;
}

const initialState: PizzaSliceState = {
    items: [],
    status: Statuse.LOADING,
};

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        }
    },


    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.status = Statuse.LOADING;
             state.items = [];
          });

          builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Statuse.SUCCESS
          });

          builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = Statuse.ERROR;
             state.items = [];
          })
    }

    
})

export default pizzaSlice.reducer;