import React from 'react'
import ScypeIcon from '../../../assets/ScypeIcon'
import VscoIcon from '../../../assets/VscoIcon'
import PinterestIcon from '../../../assets/PinterestIcon'
import GuitarIcon from '../../../assets/GuitarIcon'
import LineIcon from '../../../assets/LineIcon'
import ShopIcon from '../../../assets/ShopIcon'
import IconsBar from '../../IconsBar'

const Footer = () => {
  return (
      <div className=' h-275  items-center justify-between aling bg-black text-white '>
        <IconsBar/>
          <div className='flex flex-col items-center justify-center'>
              <ScypeIcon/>
              <VscoIcon/>
              <PinterestIcon/>
          </div>
      </div>
  )
}

export default Footer