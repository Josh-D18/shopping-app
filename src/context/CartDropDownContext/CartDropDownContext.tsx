import React, { useState, createContext } from "react";

interface IProvider {
  children: React.ReactNode;
}

interface IContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: [];
  addItemsToCart: React.Dispatch<React.SetStateAction<any>>;
}

const addCartItem = (cartItems: any, productToAdd: any) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem: any) => cartItem.id === productToAdd
  );
  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem: any) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartDropDownContext = createContext<IContext>({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
});

const CartDropDownProvider = (props: IProvider) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any>([]);

  const addItemsToCart = (productToAdd: any) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isOpen, setIsOpen, cartItems, addItemsToCart };

  return (
    <CartDropDownContext.Provider value={value}>
      {children}
    </CartDropDownContext.Provider>
  );
};

export default CartDropDownProvider;
