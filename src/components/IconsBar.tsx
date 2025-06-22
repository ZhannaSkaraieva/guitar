import React from 'react'
import GuitarIcon from '../assets/GuitarIcon'
import LineIcon from '../assets/LineIcon'
import ShopIcon from '../assets/ShopIcon'

const IconsBar = () => {
  return (
    <div className='  relative box-border mt-25 ml-40 items-center w-70 h-70'>
      <GuitarIcon/>
      <LineIcon />
      <div className='absolute left-21 top-32 '>
        <ShopIcon />
      </div>
    </div>
  )
}

export default IconsBar