import React from "react";
import Arrow from "../images/arrow.png";
import DashboardIcon from "../images/window.png";
import SideBarField from "./SideBarField";
import { MdWindow } from "react-icons/md";
import { GiLinkedRings } from "react-icons/gi";
import { BsFileText, BsBank } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  return (
    <nav className="md:block sm:none xs:hidden w-1/4 h-2*screen gap-2 border-r-2 border border-gray-200 flex flex-wrap flex-col items-center font-semibold text-md">
      <div className="w-full h-full mt-5">
        <div className="px-10">
          <img src={Arrow} className="object-contain w-8 h-8" alt="arrow" />
        </div>

        {/* Using SideBarField Component */}
        <SideBarField>
          <MdWindow className="w-6 h-6" />
          My Dashboard
          <IoIosArrowForward className="w-6 h-6" />
        </SideBarField>

        <SideBarField>
          <GiLinkedRings className="w-6 h-6" />
          TOTM links
          <IoIosArrowForward className="w-6 h-6" />
        </SideBarField>

        <SideBarField>
          <BsFileText className="w-6 h-6" />
          Daily Summary
          <IoIosArrowForward className="w-6 h-6" />
        </SideBarField>

        <SideBarField>
          <BsBank className="w-6 h-6" />
          Bank Details
          <IoIosArrowForward className="w-6 h-6" />
        </SideBarField>
      </div>
    </nav>
  );
};

export default Sidebar;
