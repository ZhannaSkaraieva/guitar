import React from 'react'
import { NavLink } from 'react-router-dom'

const AppNav = () => {
    return (
        <nav className=' w-355 h-full pr-20 pl-20  flex flex-1 justify-center items-center gap-40 font-[Open_Sans] font-normal text-sm tracking-normal text-center'>
            <NavLink to="/" end className='w-[58px] h-[20px] flex items-center justify-center whitespace-nowrap'>Каталог</NavLink>
            <NavLink to="/about" end className='w-[58px] h-[20px] flex items-center justify-center whitespace-nowrap'>О компании</NavLink>
            <NavLink to="/wherebuy" end className='w-[87px] h-[20px] flex items-center justify-center whitespace-nowrap'>Где купить?</NavLink>
            {/*<NavLink to="/:guitarId">Guitar</NavLink>**/}
        </nav>
    )
}

export default AppNav