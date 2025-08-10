import React, { useContext } from "react";
import LoupeIcon from "../assets/LoupeIcon";
import CartIcon from "../assets/BasketIcon";
import AppNav from "../route/AppNav";
import { Link, NavLink } from "react-router-dom";
import HeaderIcon from "../assets/HeaderIcon";
import SearchBar from "./components/SearchBar";
import BasketIcon from "../assets/BasketIcon";
import { CartContext } from "../features/ContextProvider";


export const Header = () => {
  const { cart } = useContext(CartContext);
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

      <div className="rflex items-center">

      <Link
        to="/basket"
        className=" relative flex items-center justify-center w-10 lg:w-35  "
      >
        <BasketIcon /> 

        {/** КОЛИЧЕСТВО ТОВАРОВ В КОРЗИНЕ */
        cart.guitars.length > 0 && (
          <span className="absolute flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full">
            {cart.guitars.length}
          </span>
        )}
        </Link>
        </div>
    </div>
  );
};

export default Header


