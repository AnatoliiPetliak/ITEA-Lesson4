import React from "react";
import { ThemeContext } from "./context_helper";
import "./button.css";

const Button = ({ children, action }) => {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <button onClick={action} className={`btn ${value.theme}`}>
          {children}
        </button>
      )}
    </ThemeContext.Consumer>
  );
};
export default Button;
