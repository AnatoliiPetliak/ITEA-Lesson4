import React from "react";

const Table = ({ children }) => {
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

export default Table;
