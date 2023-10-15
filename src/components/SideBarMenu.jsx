import React from "react";
import Arrow from "../images/arrow.png";
import DashboardIcon from "../images/window.png";
import SideMenuField from "./SideMenuField";
import { MdWindow } from "react-icons/md";
import { GiLinkedRings } from "react-icons/gi";
import { BsFileText, BsBank } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

const SideMenuComp = () => {
  return (
    <>
      <nav className="absolute z-40 md:hidden w-full h-full sm:h-screen sm:w-2/3 xs:w-full xs:h-2*screen gap-2 border-r-2 border border-gray-200 flex flex-wrap flex-col items-center font-semibold text-md">
        <div className="w-full h-full flex flex-col items-center bg-white">
          <SideMenuField>
            <div className="flex flex-row w-1/2">
              <MdWindow className="w-6 h-6" />
              <p className="ml-5">My Dashboard</p>
            </div>
            <IoIosArrowForward className="w-6 h-6" />
          </SideMenuField>

          <SideMenuField>
            <div className="flex flex-row w-1/2">
              <GiLinkedRings className="w-6 h-6" />
              <p className="ml-5">TOTM links</p>
            </div>
            <IoIosArrowForward className="w-6 h-6" />
          </SideMenuField>

          <SideMenuField>
            <div className="flex flex-row w-1/2">
              <BsFileText className="w-6 h-6" />
              <p className="ml-5">Daily Summary</p>
            </div>
            <IoIosArrowForward className="w-6 h-6" />
          </SideMenuField>

          <SideMenuField>
            <div className="flex flex-row w-1/2">
              <BsBank className="w-6 h-6" />
              <p className="ml-5"> Bank Details</p>
            </div>
            <IoIosArrowForward className="w-6 h-6" />
          </SideMenuField>
          <div className="w-full h-full bg-white"></div>
        </div>
      </nav>
    </>
  );
};

const SideBarMenu = () => {
  return <SideMenuComp />;
};

export default SideBarMenu;
