import { useContext, useState } from "react";
import Cart from "../../@types/Cart";
import Product from "../../@types/Product";
import CartContext from "../context/CartContext";

interface CartContextProviderProps {
  children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, setCartState] = useState<Cart>({
    items: []
  });

  function addToCart(product: Product) {
    
    let itemAlreadyExists = false;

    cartState.items.forEach((item: Product) => {
      if (item.id === product.id) {
        itemAlreadyExists = true;
      }
    });

    if (!itemAlreadyExists) {
      setCartState({
        items: [...cartState.items, Object.assign(product, { quantity: 1 })]
      });
    }
  }

  function removeFromCart(product: Product) {
    setCartState({
      items: cartState.items.filter((prod: Product) => {
        if (prod !== product) {
          return prod;
        }
      })
    });
  }

  function increment(product: Product) {
    setCartState({
      items: cartState.items.filter((prod: Product) => {
        if (prod === product) {
          return Object.assign(prod, { quantity: prod.quantity + 1 });
        } else {
          return prod;
        }
      })
    });
  }

  function decrement(product: Product) {
    setCartState({
      items: cartState.items.filter((prod: Product) => {
        if (prod === product && product.quantity > 1) {
          return Object.assign(prod, { quantity: prod.quantity - 1 });
        } else {
          return prod;
        }
      })
    });
  }

  function resetCart() {
    setCartState({
      items: []
    });
  }

  return (
    <CartContext.Provider
      value={{
        cart: cartState,
        addToCart,
        removeFromCart,
        decrement,
        increment,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
