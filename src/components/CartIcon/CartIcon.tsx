import { ReactComponent as ShoppingIcon } from "../assets/icons/shopping-bag.svg";
import "./CartIcon.styles.scss";

interface ICartIcon {
  clickFunc: () => any;
}

const CartIcon = (props: ICartIcon) => {
  const { clickFunc } = props;
  return (
    <div onClick={clickFunc} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
