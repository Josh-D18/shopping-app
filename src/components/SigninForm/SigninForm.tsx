import { useState, useEffect } from "react";
import Button from "../Button";
import FormInput from "../FormInput";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase/firebase.utils";
import "./SigninForm.styles.scss";
import { getRedirectResult } from "firebase/auth";

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

  useEffect(() => {
    const getData = async () => {
      const response = await getRedirectResult(auth);

      if (response !== null) {
        const { user } = response;
        const userDocRef = await createUserDocumentFromAuth(user);
      }
    };

    getData();
  });

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
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetSignup();
    } catch (error: any) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user with that email is found");
          break;
        default:
          break;
      }
    }
  };

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

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

        <div>
          <Button type="submit" classes="inverted">
            Sign In
          </Button>

          <Button
            type="button"
            classes="google"
            onClick={() => signInWithGoogleRedirect()}
          >
            Sign In with Google Redirect
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
