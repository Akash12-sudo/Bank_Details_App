import React from "react";

const FormInput = ({ Id, Type, Placeholder, Value, State, changeHandler }) => {
  console.log(State);

  return State ? (
    <input
      id={Id}
      type={Type}
      className="w-full xs:mt-5 text-slate-800 placeholder:font-semibold placeholder:text-slate-300 rounded-sm border border-gray-200 p-2"
      style={{ backgroundColor: "#ebfced" }}
      placeholder={Placeholder}
      value={Value}
      onChange={changeHandler}
    />
  ) : (
    <input
      id={Id}
      type={Type}
      className="w-full xs:mt-5 text-slate-800 placeholder:font-semibold placeholder:text-slate-300 rounded-sm border border-gray-200 p-2"
      placeholder={Placeholder}
      value={Value}
      onChange={changeHandler}
    />
  );
};

export default FormInput;
