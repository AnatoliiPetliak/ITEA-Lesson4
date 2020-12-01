import React from "react";

const Row = ({ children }) => {
  return (
    <>
      {React.Children.count(children) >= 0 && (
        <>
          {React.Children.map(children, (child, i) => {
            return child;
          })}
        </>
      )}
    </>
  );
};
Row.defaultProps = {
  head: false,
};

export default Row;
