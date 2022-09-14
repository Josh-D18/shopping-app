import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import Signup from "../../Signup";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

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
    <div>
      Sign In Page
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <button onClick={() => signInWithGoogleRedirect()}>
        Sign In with Google Redirect
      </button>
      <Signup />
    </div>
  );
};

export default Signin;
