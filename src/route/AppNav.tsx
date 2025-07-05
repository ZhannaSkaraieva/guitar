import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/catalog", label: "Каталог", width: "w-[58px]" },
  { to: "/about", label: "О компании", width: "w-[58px]" },
  { to: "/wherebuy", label: "Где купить?", width: "w-[87px]" },
];

const AppNav = () => {
  return (
    <>
      <nav className="flex flex-1 justify-between items-center gap-10">
        {navItems.map(({ to, label, width }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={`${width} h-[20px] flex items-center justify-center whitespace-nowrap font-[Open_Sans] font-normal text-sm tracking-normal text-center`}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default AppNav;
