import Button from "../Button";
import "./CartDropDown.styles.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button classes="">Go To Checkout</Button>
    </div>
  );
};

export default CartDropDown;
