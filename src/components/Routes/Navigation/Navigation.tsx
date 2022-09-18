import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../../context/User/UserContext";
import { ReactComponent as Logo } from "../../assets/icons/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../CartIcon";
import "./Navigation.styles.scss";
import CartDropDown from "../../CartDropDown";
import { CartDropDownContext } from "../../../context/CartDropDownContext/CartDropDownContext";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen, setIsOpen } = useContext(CartDropDownContext);
  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              Sign In
            </Link>
          )}

          <CartIcon clickFunc={() => setIsOpen(!isOpen)} />
        </div>
        {isOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
