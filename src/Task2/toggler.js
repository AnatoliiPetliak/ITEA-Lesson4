import React from "react";
import PropTypes from "prop-types";

export const Toggler = ({ children, active, action }) => {
  return (
    <div className="toggler">
      {React.Children.count(children) > 0 && (
        <>
          {React.Children.map(children, (childItem) => {
            if (React.isValidElement(childItem)) {
              return React.cloneElement(
                childItem,
                {
                  active: childItem.props.value === active,
                  action: action(childItem.props.value),
                },
                <>{childItem.props.value}</>
              );
            }
          })}
        </>
      )}
    </div>
  );
};

Toggler.propTypes = {
  action: PropTypes.func.isRequired,
  active: PropTypes.array.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

export const TogglerItem = ({ children, active, action }) => {
  return (
    <button
      type="button"
      className={active ? "toggler__item active" : "toggler__item"}
      onClick={action}>
      {children}
    </button>
  );
};

TogglerItem.propTypes = {
  children: PropTypes.element,
  active: PropTypes.bool,
  action: PropTypes.func,
  value: PropTypes.string,
};
