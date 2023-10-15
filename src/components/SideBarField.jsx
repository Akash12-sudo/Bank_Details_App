import React, { useState } from "react";

const SideBarField = ({ children }) => {
  const [bgColor, setBgColor] = useState("#FFFFFF");

  const bgColorHandler = () => {
    setBgColor("#ebfced");
    setTimeout(() => setBgColor("#FFFFFF"), 500);
  };

  return (
    <p
      className="mt-5 flex flex-row justify-between w-full px-10 py-4  h-auto text-center  hover:cursor-pointer hover:text-green-500"
      onClick={bgColorHandler}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </p>
  );
};

export default SideBarField;
