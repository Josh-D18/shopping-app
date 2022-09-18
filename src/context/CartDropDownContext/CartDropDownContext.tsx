import React, { useState, createContext } from "react";

interface IProvider {
  children: React.ReactNode;
}

interface IContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartDropDownContext = createContext<IContext>({
  isOpen: false,
  setIsOpen: () => {},
});

const CartDropDownProvider = (props: IProvider) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const value = { isOpen, setIsOpen };

  return (
    <CartDropDownContext.Provider value={value}>
      {children}
    </CartDropDownContext.Provider>
  );
};

export default CartDropDownProvider;
