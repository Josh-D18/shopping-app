import { useState } from "react";
import Button from "../Button";
import FormInput from "../FormInput";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import "./SignupForm.styles.scss";

type SignUp = {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignupForm = () => {
  const [signup, setSignUp] = useState<SignUp>({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = signup;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSignUp({
      ...signup,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (signup.password !== signup.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const resetSignup = () => {
      setSignUp({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    };

    try {
      const { user }: any = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, {
        displayName,
      });

      resetSignup();
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-contianer">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />

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

        <FormInput
          label="Confirm Passowrd"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <Button classes="inverted" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
