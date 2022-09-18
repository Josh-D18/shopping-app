interface ICartItem {
  name: string;
  quantity: string;
}

const CartItem = (props: ICartItem) => {
  const { name, quantity } = props;

  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
