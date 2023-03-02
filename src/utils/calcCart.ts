import { CartItems } from "../redux/cart/types";


export const calcCart = (items: CartItems[]) => {
  return  items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0);
}