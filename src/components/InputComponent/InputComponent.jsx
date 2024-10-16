import React from "react";

import "./InputComponent.css";

export default function InputComponent({
  id,
  name,
  type,
  placeholder,
  register,
  error,
}) {
  return (
    <div className="input__container">
      {!error ? (
        <input
          className="input error"
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          {...register}
        />
      ) : (
        <input
          className="input"
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          {...register}
        />
      )}
    </div>
  );
}
