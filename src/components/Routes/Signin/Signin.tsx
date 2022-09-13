import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
    console.log(user);
  };

  return (
    <div>
      Sign In Page
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  );
};

export default Signin;
