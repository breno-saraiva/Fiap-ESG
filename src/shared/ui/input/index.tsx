import React from "react";

type InputProps = {
  type?: string;
  text?: string;
  name?: string;
  placeholder?: string;
  OnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  pattern?: string;
  defaultValue?: string;
};

const Input: React.FC<InputProps> = ({
  type,
  text,
  name,
  placeholder,
  OnChange,
  value,
  pattern,
  defaultValue,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="mb-[.6em] font-bold">
        {text}
      </label>
      <input
        pattern={pattern}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={OnChange}
        value={value}
        defaultValue={defaultValue}
        className="p-[.7em] rounded-none border-none placeholder:text-[#7b7b7b]"
      />
    </div>
  );
};

export { Input };
