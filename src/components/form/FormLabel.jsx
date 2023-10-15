import React from "react";

const FormLabel = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="w-full font-bold text-1xl">
      {children}
    </label>
  );
};

export default FormLabel;
