import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

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
    <div>
      SignupForm
      <form onSubmit={handleSubmit}>
        <label> Display Name</label>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <label>Password </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <label> Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default SignupForm;
