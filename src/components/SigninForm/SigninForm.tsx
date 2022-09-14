import { useState } from "react";
import Button from "../Button";
import FormInput from "../FormInput";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../utils/firebase/firebase.utils";
import "./SigninForm.styles.scss";

type SignIn = {
  email: string;
  password: string;
};

const SigninForm = () => {
  const [signup, setSignUp] = useState<SignIn>({
    email: "",
    password: "",
  });

  const { email, password } = signup;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSignUp({
      ...signup,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const resetSignup = () => {
      setSignUp({
        email: "",
        password: "",
      });
    };

    try {
      resetSignup();
    } catch (error: any) {}
  };

  return (
    <div className="sign-up-contianer">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <Button classes="inverted" onClick={() => signInWithGoogleRedirect()}>
          Sign In with Google Redirect
        </Button>
      </form>
    </div>
  );
};

export default SigninForm;
