import React from "react";

const inputFields = ({
  className,
  type,
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default inputFields;
