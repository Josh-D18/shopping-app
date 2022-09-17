import { useContext } from "react";
import { ProductsContext } from "../../../context/Product/ProductsContext";
import ProductCard from "../../ProductCard";
import "./Shop.styles.scss";

const Shop = () => {
  const products = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products &&
        products?.products.map(({ name, id, price, imageUrl }) => (
          <div key={id}>
            <ProductCard name={name} price={price} imageUrl={imageUrl} />
          </div>
        ))}
    </div>
  );
};

export default Shop;
