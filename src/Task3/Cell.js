import React, { Component } from "react";
import { TitleContext, ThemeContext } from "../Task3/context_helper";

const Cell = ({ children, background, type, currency }) => {
  let textStyle = {};

  switch (type) {
    case "text":
      textStyle = { textAlign: "left" };
      break;
    case "date":
      textStyle = { fontStyle: "italic" };
      break;
    case "number":
      textStyle = { textAlign: "right" };
      break;
    case "money":
      textStyle = { textAlign: "right" };
      break;
    default:
  }

  if (currency !== null) {
    children = children + currency;
  } else {
    console.log("No currency");
  }

  let styleList = { ...textStyle, background: background };
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <div style={styleList}>
          {children}
          <p>{value}</p>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

Cell.defaultProps = {
  type: "text",
  cells: 1,
  background: "transparent",
  color: "black",
};
export default Cell;
