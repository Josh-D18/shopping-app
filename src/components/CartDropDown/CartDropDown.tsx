import { useContext } from "react";
import { CartDropDownContext } from "../../context/CartDropDownContext/CartDropDownContext";
import Button from "../Button";
import CartItem from "../CartItem";
import "./CartDropDown.styles.scss";

const CartDropDown = () => {
  const { cartItems } = useContext(CartDropDownContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {/* {cartItems.map((item) => (
        //   <CartItem key={item.id} cartItem={item} />
        ))} */}
      </div>
      <Button classes="">Go To Checkout</Button>
    </div>
  );
};

export default CartDropDown;
// 7"07
