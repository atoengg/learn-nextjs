import Link from "next/link";
import React, { ReactNode } from "react";

interface SidebarItemProps {
  icon: ReactNode;
  location: string;
}

const SidebarItem = ({ icon, location }: SidebarItemProps) => {
  return (
    <Link href={location}>
      <li>
        <div className="items-center rounded-sm text-black text-[1rem] flex py-[0.7rem] px-[1rem] transition-all duration-[0.5s] font-semibold hover:text-white hover:bg-[#0085ff] hover:rounded-[50%] active:bg-[#0085ff] active:text-white active:rounded-[50%]">
          {icon}
        </div>
      </li>
    </Link>
  );
};

export default SidebarItem;
