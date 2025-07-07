import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/catalog", label: "Каталог", width: "w-[3.6rem]" },
  { to: "/about", label: "О компании", width: "w-[3.6rem]" },
  { to: "/wherebuy", label: "Где купить?", width: "w-[5.4rem]" },
];

const AppNav = () => {
  return (
    <>
      <nav className="box-border flex px-6 flex-1 items-center gap-10 lg:gap-20 max-sm:hidden ">
        {navItems.map(({ to, label, width }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={`${width} h-5 flex items-center justify-center whitespace-nowrap font-[Open_Sans] font-normal sm:text-sm md:text-sm lg:text-lg tracking-normal text-center`}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default AppNav;
