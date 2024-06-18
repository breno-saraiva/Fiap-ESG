import React from "react";

type InputProps = {
  type?: string;
  text?: string;
  name?: string;
  placeholder?: string;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const Input: React.FC<InputProps> = ({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="mb-[.6em] font-bold">
        {text}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        className="p-[.7em] rounded-none border-none placeholder:text-[#7b7b7b]"
      />
    </div>
  );
};

export { Input };
