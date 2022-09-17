import React, { createContext, useState } from "react";
import shopData from "../../data/shop-data.json";

interface IProvider {
  children: React.ReactNode;
}

interface IProductContext {
  products: { id: number; name: string; imageUrl: string; price: number }[];
  setProducts: React.Dispatch<
    React.SetStateAction<
      { id: number; name: string; imageUrl: string; price: number }[]
    >
  >;
}

export const ProductsContext = createContext<IProductContext | null>({
  products: shopData,
  setProducts: () => {},
});

const ProductsProvider = (props: IProvider) => {
  const { children } = props;
  const [products, setProducts] = useState(shopData);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
