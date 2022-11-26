import React from "react";
import { useController } from "react-hook-form";

const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    placeholder,
    error = "",
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="mt-3">
      <input
        id={name}
        autoComplete="off"
        type={type}
        className={`py-3 px-4 rounded-xl w-full text-sm  leading-[24px] font-medium text-[#777E91] border-2 border-[#E6E8EC] transition-all
        ${error.length > 0 ? "border-[#EB5757]" : "border-gray-300"}`}
        placeholder={placeholder}
        name={name}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="mt-2 text-sm pointer-events-none text-[#EB5757]">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
