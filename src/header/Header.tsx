
import React from 'react'


import LoupeIcon from '../assets/LoupeIcon'
import CartIcon from '../assets/CartIcon'
import IconsBar from '../components/IconsBar'
import AppNav from '../route/AppNav'
import { NavLink } from 'react-router-dom'

export const Header =() => {
  return (
    <div className='  box-border flex flex-row items-center justify-around aling bg-black text-white lg:h-27'>

      {/** ЛОГОТИП */}
      <div className='box-border flex items-center'>
        <NavLink to="/" end><IconsBar /></NavLink>
      </div>


      {/** НАВИГАЦИОННОЕ МЕНЮ */}
      <div className='box-border flex w-[355px] h-[70px] px-6 items-center '>
        <AppNav />
      </div>

      {/** ПОИСК */}
      <div className=" relative flex">
        <div className='pointer-events-auto absolute'>
          <LoupeIcon />
        </div>
        <input  type="text" placeholder="Search?" className="w-[300px] h-10 border pl-10" />
      </div>

      {/** КОРЗИНА */}
      <nav className='w-10 h-10 flex items-center justify-center mx-1.25'>
        <NavLink to="/cart" className="flex items-center justify-center w-full h-full"><CartIcon/></NavLink>
      </nav>
    </div>
  )
}

export default Header