

import { CartItems } from "../redux/cart/types";
import { calcCart } from "./calcCart";

export const getCartLS = () => {
    const date = localStorage.getItem('cart')
   
    const items: CartItems[] = date? JSON.parse(date) : [];
    const totalPrice = calcCart(items);
    
    
    return {
        items,
        totalPrice
    }
}

