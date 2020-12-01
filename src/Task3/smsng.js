import React from "react";

import Button from "./button";
import { ThemeContext } from "./context_helper";

const Something = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        return (
          <>
            <h2 style={{ color: ` ${value.theme}` }}> Something </h2>
            <Button action={value.changeTheme("lime")}> Lime </Button>;
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};
export default Something;
