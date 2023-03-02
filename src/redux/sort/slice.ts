import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateSliceType, SortItems, SortPropertyEnum } from "./types";


const initialState: CreateSliceType = {
    idCategories: 0,
    page: 1,
    sortName: {
        name: 'популярності',
        sortProperty: SortPropertyEnum.RATING,
    },

}

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSort(state, action: PayloadAction<SortItems>) {
            state.sortName = action.payload;
        },
        setCategories(state, action: PayloadAction<number>) {
            state.idCategories = action.payload;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload
        },
        setFilters(state, action: PayloadAction<CreateSliceType>) {
            console.log(action);
            
            state.sortName = action.payload.sortName
            state.idCategories = Number(action.payload.idCategories)
            state.page = Number(action.payload.page)
        },
    },
})



export const { setSort, setCategories, setPage, setFilters } = sortSlice.actions;

export default sortSlice.reducer;
