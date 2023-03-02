export type FetchPizzaParams ={
    sort: string;
    categories: string;
    page: string;
}
export type Pizza = {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    type: string;
    size: number;
    count: number;
  }

  export enum Statuse {
LOADING = 'loading',
SUCCESS = 'success',
ERROR = 'error',
  }

  export interface PizzaSliceState {
    items: Pizza[];
    status: Statuse;
}