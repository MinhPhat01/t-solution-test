import React from "react";

const Label = (props) => {
  const { children, htmlFor = "", className = "" } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`text-xs leading-3 font-bold text-[#B1B5C4] cursor-pointer uppercase ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
