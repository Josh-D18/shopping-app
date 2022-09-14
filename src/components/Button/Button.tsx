import React from "react";
import "./Button.styles.scss";

enum buttonType {
  google = "google-sign-in",
  inverted = "inverted",
}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  classes: string;
}

const Button = (props: IButton) => {
  const { children, classes, ...rest } = props;
  return (
    <button
      className={`button-container ${
        buttonType[classes as keyof typeof buttonType]
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
