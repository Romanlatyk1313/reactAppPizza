import { RootState } from "../store";

export const selectPage = (state: RootState) => state.sort.page;
export const selectSortDate = (state: RootState) => state.sort;
export const selectIdCategories = (state: RootState) => state.sort.idCategories;
export const selectSortName = (state: RootState) => state.sort.sortName;