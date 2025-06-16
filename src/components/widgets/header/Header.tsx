
import React from 'react'
import GuitarIcin from '../../../assets/GuitarIcin'
import LineIcon from '../../../assets/LineIcon'

export const Header =() => {
  return (
    <div className='flex flex-row justify-between bg-black text-white'>
      <div className='flex items-center w-6xl h-70'>
        <GuitarIcin />
        <LineIcon />
      </div>
      <nav className="flex justify-center space-x-4">
        <ol className='list-reset flex'>
          <li><a href="/Home" className="">Home</a></li>
          <li><a href="/Guitar" className="">Guitars</a></li>
          <li><a href="/About" className="">About</a></li>
          <li><a href="/Wherebuy" className="">Where to buy</a></li> 
        </ol>
      </nav>
      <div>
        <input type="text" placeholder="Search..." className="border rounded px-2 py-1" />
      </div>
      <div>
        <a href="/Cart" className="">Cart</a>
      </div>
    </div>
  )
}

export default Header