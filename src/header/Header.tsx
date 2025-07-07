import React from "react";
import LoupeIcon from "./components/LoupeIcon";
import CartIcon from "./components/CartIcon";
import AppNav from "../route/AppNav";
import { NavLink } from "react-router-dom";
import HeaderIcon from "./components/HeaderIcon";

export const Header = () => {
  return (
    <div className="box-border w-full h-[70px] md:h-[70px] lg:h-[90px] flex flex-row items-center px-4 sm:px-6 md:px-8 lg:px-10  bg-black text-white">
      {/** ЛОГОТИП */}
      <div className="">
        <NavLink to="/" end>
          <HeaderIcon />
        </NavLink>
      </div>

      {/** НАВИГАЦИОННОЕ МЕНЮ */}
      <div className="ml-4">
        <AppNav />
      </div>

      {/** ПОИСК */}
      <div className="relative flex w-[18.75rem] max-md:w-[2.5rem] h-10 ml-auto">
        <div>
          <LoupeIcon />
        </div>
        <input
          type="text"
          placeholder="Search?"
          className="w-full max-md:border-none border border-white pl-10"
        />
      </div>

      {/** КОРЗИНА */}
      <div className="flex items-center justify-center w-10 lg:w-15 h-10 lg:h-15">
        <NavLink to="/cart">
          <CartIcon />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
