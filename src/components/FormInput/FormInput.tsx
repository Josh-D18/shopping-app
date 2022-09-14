import React from "react";
import "./FormInput.styles.scss";

interface IForm extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput = (props: IForm) => {
  const { label, value, ...rest } = props;
  return (
    <div className="group">
      <input
        type="text"
        name="displayName"
        className="form-input"
        {...rest}
        required
      />
      {label && (
        <label
          className={`${
            value!.toString().length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
