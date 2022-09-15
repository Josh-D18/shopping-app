import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import Signup from "../../Signup";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../../Button";
import "./Signin.styles.scss";
import SigninForm from "../../SigninForm";

const Signin = () => {
  return (
    <div className="container">
      <div className="sign-in-container">
        <h2>Sign In Page</h2>
        <p>Sign in with your email and password</p>
        <div className="sign-in-container-button">
          <SigninForm />
        </div>
      </div>
      <Signup />
    </div>
  );
};

export default Signin;
