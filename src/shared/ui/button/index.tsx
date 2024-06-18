import React, { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  text?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const SubmitButton: React.FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <div>
      <button
        {...rest}
        className="bg-[#222] text-white py-[0.7em] px-[1.2em] duration-150 cursor-pointer hover:bg-[#FFBB33] hover:text-[#222] rounded-lg"
      >
        {text}
      </button>
    </div>
  );
};

export { SubmitButton };
