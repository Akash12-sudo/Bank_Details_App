import React, { useState } from "react";
import Search from "../images/search.svg";
import Notifications from "../images/notification-64.png";
import Profile from "../images/profile.png";
import Sidebar from "./Sidebar";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";
import SideBarMenu from "./SideBarMenu";
import { toggleSideMenu } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.ToggleSideMenu);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="w-full h-full flex flex-row  justify-between items-center px-4 font-bold text-md border-b border-solid border-gray-200">
        <div className="w-1/5 h-full flex flex-row justify-center text-center items-center">
          <p className="md:block sm:hidden xs:hidden w-1/2 h-full cursor-pointer pt-6 pb-2 hover:border-b hover:border-solid  hover:border-green-600">
            Logo
          </p>
          <div className="md:hidden sm:flex xs:flex flex-col align-center items-center w-full h-full">
            {!state ? (
              <IoReorderThreeOutline
                className="h-8 w-8 mt-4 cursor-pointer"
                onClick={() => dispatch(toggleSideMenu())}
              />
            ) : (
              <BsArrowLeft
                className="h-8 w-8 mt-4 cursor-pointer"
                onClick={() => dispatch(toggleSideMenu())}
              />
            )}
          </div>
        </div>
        <div className=" md:flex sm:hidden xs:hidden w-full h-full flex flex-row justify-evenly gap-2">
          <p className=" h-full cursor-pointer pt-6 pb-2 px-3 hover:border-b hover:border-solid  hover:border-green-600">
            Home
          </p>
          <p className=" h-full cursor-pointer pt-6 pb-2 px-3 hover:border-b hover:border-solid  hover:border-green-600">
            Services
          </p>
          <p className=" h-full cursor-pointer pt-6 pb-2 px-3 hover:border-b hover:border-solid  hover:border-green-600">
            Blog
          </p>
          <p className=" h-full cursor-pointer pt-6 pb-2 px-3 hover:border-b hover:border-solid  hover:border-green-600">
            Offers
          </p>
          <p className=" h-full cursor-pointer pt-6 pb-2 px-3 hover:border-b hover:border-solid  hover:border-green-600">
            About Us
          </p>
        </div>
        <div className="md:flex sm:hidden xs:hidden w-1/3 flex flex-row justify-evenly  ">
          <img
            src={Search}
            className="object-contain h-8 w-8 pt-2 cursor-pointer"
            alt="search"
          />
          <img
            src={Notifications}
            className="object-contain h-8 w-8 pt-2 cursor-pointer"
            alt="notifications"
          />
          <img
            src={Profile}
            className="object-contain h-8 w-8 pt-2 cursor-pointer"
            alt="profile"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
