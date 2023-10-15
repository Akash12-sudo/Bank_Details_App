import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import BankDetailsPage from "./BankDetailsPage";
import SideBarMenu from "./SideBarMenu";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const state = useSelector((state) => state.ToggleSideMenu);
  console.log(state);

  return (
    <div className="w-screen h-full max-w-full flex flex-col">
      <Navbar />
      <div className="w-screen h-full flex flex-start z-2 justify-between ">
        {state && <SideBarMenu />}
        <Sidebar />
        <BankDetailsPage />
      </div>
    </div>
  );
};

export default HomePage;
