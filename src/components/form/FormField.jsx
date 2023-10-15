import React from "react";

const FormField = ({ children }) => {
  return (
    <div className="md:flex-row sm:flex-row xs:flex-col mt-4 w-full flex flex-row justify-between items-center">
      {children}
    </div>
  );
};

export default FormField;
