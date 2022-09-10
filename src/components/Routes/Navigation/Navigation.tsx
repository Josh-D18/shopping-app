import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/crown.svg";
import "./Navigation.styles.scss";

const Navigation = () => {
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
          <Link to="/sign-in" className="nav-link">
            Sign In
          </Link>
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
