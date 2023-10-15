import React, { useState } from "react";

const SideMenuField = ({ children }) => {
  const [bgColor, setBgColor] = useState("#FFFFFF");

  const bgColorHandler = () => {
    setBgColor("#ebfced");
    setTimeout(() => setBgColor("#FFFFFF"), 500);
  };

  return (
    <p
      className="flex flex-row justify-between w-5/6 px-10 py-4  h-auto text-center border-b border-gray-200  hover:cursor-pointer hover:text-green-500"
      onClick={bgColorHandler}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </p>
  );
};

export default SideMenuField;
