export enum SortPropertyEnum {
    RATING = 'rating',
    PRICE = 'price',
    TITLE = 'title',
 }
 
 export type SortItems = {
     name: string;
     sortProperty: SortPropertyEnum;
   }
 
export interface CreateSliceType {
     idCategories:number;
     page: number;
     sortName:SortItems
 }