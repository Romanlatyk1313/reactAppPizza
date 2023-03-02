import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchSliceState } from "./types";

const initialState: SearchSliceState = {
    searchValue: '',
}
export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        findName: (state, action: PayloadAction<string> ) => {
            state.searchValue = action.payload;
        },
        clearName: (state) => {
            state.searchValue = '';
        }
    },
})



export const { findName, clearName } = searchSlice.actions

export default searchSlice.reducer