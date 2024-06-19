import React from "react";

type SelectProps = {
  text?: string;
  name?: string;
  options?: { value: string; label: string }[];
  value?: string;
  defaultValue?: string;
  Onchange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<SelectProps> = ({
  text,
  name,
  options,
  Onchange,
  value,
  defaultValue,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="mb-[.6em] font-bold">
        {text}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={Onchange}
        defaultValue={defaultValue}
        className="p-[.7em] rounded-none border-none text-[#7b7b7b]"
      >
        {options?.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
