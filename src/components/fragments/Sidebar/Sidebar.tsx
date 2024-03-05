import SidebarItem from "@/components/Elements/SidebarItem/SidebarItem";
import React from "react";
import {
  BsBell,
  BsClock,
  BsHouseExclamation,
  BsPeople,
  BsWallet,
} from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
      <div className="bg-white bottom-0 h-screen w-[10vh] fixed top-0 transition duration-[0.5] ease-out">
        <div className="">
          <div className="px-[30px]">
            <h1 className="w-full">A.</h1>
          </div>
          <div className="grid items-stretch ">
            <div className="grid items-stretch mt-4">
              <ul className="bg-[#f4f5fa] rounded-3xl grid justify-center items-center mx-auto p-0">
                <SidebarItem icon={<BsHouseExclamation />} location="/home" />

                <SidebarItem icon={<BsBell />} location="/notifications" />
                <SidebarItem icon={<BsClock />} location={"/time"} />
                <SidebarItem icon={<BsPeople />} location="/user" />
                <SidebarItem icon={<BsWallet />} location="/withdraw" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
