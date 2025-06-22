
import React from 'react'


import LoupeIcon from '../assets/LoupeIcon'
import CartIcon from '../assets/CartIcon'
import IconsBar from '../components/IconsBar'
import AppNav from '../route/AppNav'
import { NavLink } from 'react-router-dom'

export const Header =() => {
  return (
    <div className=' flex flex-row items-center justify-between aling bg-black text-white h-110'>
      <IconsBar />
      
      {/** НАВИГАЦИОННОЕ МЕНЮ */}
       <AppNav />

      {/** ПОИСК */}
      <div className=" relative flex">
        <div className='pointer-events-auto absolute'>
          <LoupeIcon />
        </div>
        <input  type="text" placeholder="Search?" className="w-300 h-40 border pl-40" />
      </div>

      {/** КОРЗИНА */}
      <nav className='w-40 h-40 flex items-center justify-center mx-20'>
        <NavLink to="/cart" className="flex items-center justify-center w-full h-full"><CartIcon/></NavLink>
      </nav>
    </div>
  )
}

export default Header