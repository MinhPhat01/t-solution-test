import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const { control, name, type = "text", children, error = "", ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="lg:w-[544px] w-[311px] h-[256px] mt-3">
      <textarea
        id={name}
        type={type}
        {...field}
        {...rest}
        className={`px-4 py-3 border-2 border-[#E6E8EC] w-full h-full rounded-xl text-sm leading-[24px] font-medium text-[#777E91] resize-none transition-all
        ${error.length > 0 ? "border-[#EB5757]" : "border-gray-300"}
        `}
      />
      {error.length > 0 && (
        <span className="mt-2 text-sm pointer-events-none text-[#EB5757]">
          {error}
        </span>
      )}
    </div>
  );
};

export default Textarea;
