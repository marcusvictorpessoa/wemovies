import { createContext } from "react";
import Cart from "../../@types/Cart";
import Product from "../../@types/Product";

interface ContextData {
  cart: Cart;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  increment: (product: Product) => void;
  decrement: (product: Product) => void;
  resetCart: () => void;
}

const CartContext = createContext<ContextData>({} as ContextData);

export default CartContext;
