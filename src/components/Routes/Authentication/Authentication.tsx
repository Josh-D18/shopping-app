import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import Signup from "../../Signup";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../../Button";
import "./Signin.styles.scss";
import SigninForm from "../../SigninForm";

const Signin = () => {
  useEffect(() => {
    const getData = async () => {
      const response = await getRedirectResult(auth);

      if (response !== null) {
        const { user } = response;
        const userDocRef = await createUserDocumentFromAuth(user);
      }
    };

    getData();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

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
