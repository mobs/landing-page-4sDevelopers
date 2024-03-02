"use client";

import { Sidebar } from "flowbite-react";
import { BiLogOut } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiTable,
  HiViewBoards,
} from "react-icons/hi";

import { navbarData } from "@/utils/constants";
import { Link } from "react-scroll";

export default function SidebarComponent({
}) {
  return (
    <div className="absolute top-[4.4rem] md:left-[78%] left-[48%] w-8 lg:hidden block z-50">
      <Sidebar aria-label="Default sidebar example" className="w-48">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {navbarData.map((data) => (
              <Link to={data.name.toLowerCase()}>
                <Sidebar.Item>
                  {data.name}
                </Sidebar.Item>
              </Link>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
