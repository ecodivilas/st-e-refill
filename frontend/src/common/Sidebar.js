import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";


const adminMenus = [
  { name: "Dashboard", link: "/admin-dashboard", icon: MdOutlineDashboard },
  { name: "Users", link: "/admin-dashboard", icon: AiOutlineUser },
  { name: "Orders", link: "/admin-dashboard", icon: FiShoppingCart },
  { name: "Setting", link: "/admin-dashboard", icon: RiSettings4Line },

];

const userMenus = [
  {name: "Dashboard", link: "/users-dashboard", icon: MdOutlineDashboard}, 
  {name: "Orders", link: "/users-dashboard", icon: FiShoppingCart}, 
  {name: "Setting", link: "/users-dashboard", icon: RiSettings4Line} 
]

const Sidebar = ({open, setOpen, isAdmin}) => {
  const [menus, setMenus] = useState( isAdmin ? adminMenus : userMenus)

  return (
    // <section className="flex gap-6">
      <section>
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-60" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {/* { sessionStorage.getItem('jwt') ? setMenus(adminMenus) : setMenus(userMenus) } */}
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-40 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit z-50`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;