export type CartItems = {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    type: string;
    size: number;
    count: number;
  }

export interface InitialState {
    totalPrice: number;
    items: CartItems[];
}