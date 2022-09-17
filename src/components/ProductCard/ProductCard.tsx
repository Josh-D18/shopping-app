import Button from "../Button";
import "./ProductCard.styles.scss";

interface IProduct {
  name: string;
  imageUrl: string;
  price: number;
}

const ProductCard = (props: IProduct) => {
  const { name, imageUrl, price } = props;

  return (
    <div className="product-card-container">
      <img alt={name} src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button classes="inverted"> Add To Cart</Button>
    </div>
  );
};

export default ProductCard;
