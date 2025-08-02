import React from "react";
import LoupeIcon from "../assets/LoupeIcon";
import CartIcon from "../assets/BasketIcon";
import AppNav from "../route/AppNav";
import { Link, NavLink } from "react-router-dom";
import HeaderIcon from "../assets/HeaderIcon";
import SearchBar from "./components/SearchBar";
import Basket from "../pages/basket/Basket";
import BasketIcon from "../assets/BasketIcon";

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

      <SearchBar />

      {/** КОРЗИНА */}

      <Link
        to="/basket"
        className="flex items-center justify-center w-10 lg:w-35 h-10 lg:h-35"
      >
        <BasketIcon />
      </Link>
    </div>
  );
};

export default Header;
