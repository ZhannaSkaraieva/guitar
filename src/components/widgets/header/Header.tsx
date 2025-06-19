
import React from 'react'

import LineIcon from '../../../assets/LineIcon'
import GuitarIcon from '../../../assets/GuitarIcon'
import ShopIcon from '../../../assets/ShopIcon'
import LoupeIcon from '../../../assets/LoupeIcon'
import CartIcon from '../../../assets/CartIcon'
import IconsBar from '../../IconsBar'

export const Header =() => {
  return (
    <div className='flex flex-row items-center justify-between aling bg-black text-white h-110'>
      <IconsBar/>
      <div className=''>
      <nav className=" w-355 h-full pr-20 pl-20  flex justify-center items-center ">
        <ol className='flex flex-1 items-center justify-center gap-40'>
          <li className='w-58 h-20 font-[Open_Sans] font-normal text-sm tracking-normal text-center'><a href="/Home" className="">Home</a></li>
          <li className='w-87 h-20 font-[Open_Sans] font-normal text-sm tracking-normal text-center'><a href="/About" className="">About</a></li>
          <li className='w-90 h-20 font-[Open_Sans] font-normal text-sm tracking-normal text-center'><a href="/Wherebuy" className="">Where to buy</a></li> 
        </ol>
        </nav>
      </div>
      <div className="flex">
        <LoupeIcon/>
        <input  type="text" placeholder="Search?" className="w-300 h-40 border " />
      </div>
      <div className='w-40 h-40 flex items-center justify-center mr-40'>
        <CartIcon/>
        <a href="/Cart" className=""></a>
      </div>
    </div>
  )
}

export default Header