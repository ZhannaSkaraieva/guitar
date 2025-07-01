import React from 'react'
import { Outlet } from 'react-router'

const GuitarImage = () => {
  return (
    <div className=" relative w-full h-dvh overflow-hidden">
      <div className="  absolute w-full h-full  bg-[url(/assets/Image-Back.png)]  bg-no-repeat bg-contain pointer-events-none"
        style={{
          backgroundPosition: 'left 0 top -15%', zIndex: 0
        }} />
      <div className="  absolute w-full h-full  bg-[url(/assets/Footerimg.png)] bg-no-repeat bg-contain pointer-events-none"
        style={{
          backgroundPosition: 'left 0 bottom -105%',zIndex: 0
        }} />
      <Outlet />
    </div>
  )
}

export default GuitarImage