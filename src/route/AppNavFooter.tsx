import React from 'react'
import { NavLink } from 'react-router-dom'

const AppNavFooter = () => {
  return (
    <nav className=' h-[10px] font-[Open Sans]  font-normal text-[10px] leading-[20px]'>
      <NavLink to="/wherebuy" end className=' flex items-start justify-start whitespace-nowrap'>Где купить?</NavLink>
      <NavLink to="/blog" end className=' flex items-start justify-start whitespace-nowrap'>Блог</NavLink>
      <NavLink to="/faq" end className=' flex items-start justify-start whitespace-nowrap'>Вопрос - ответ</NavLink>
      <NavLink to="/return" end className=' flex iitems-start justify-start whitespace-nowrap'>Возврат</NavLink>
      <NavLink to="/servicecenters" end className=' flex items-start justify-start whitespace-nowrap'>Сервис-центры</NavLink>
    </nav>
  )
}

export default AppNavFooter