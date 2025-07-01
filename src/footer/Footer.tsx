import React from 'react'
import IconsBar from '../components/IconsBar'
import Networks from './components/Networks'
import GuitarIcon from './components/GuitarIcon'
import ClockIcon from '../assets/ClockIcon'
import PhoneIcon from '../assets/PhoneIcon'
import AppNavFooter from '../route/AppNavFooter'
import Rectangle from '../assets/Rectangle'


const Footer = () => {
  return (
    <>
      
      <div className=' box-border flex h-275  items-center justify-between aling bg-black text-white '>
        <div className='flex flex-col items-start justify-center w-[145px] h-[150px] ml-[50px] mb-4' >
          <GuitarIcon/> 
          <Networks/>
        </div>

        {/**О НАС */}
        <div className='w-[145px] h-[150px]'>
          <div className=' w-[51px] h-[30px] font-[Droid Sans] font-normal text-sm leading-[44px] tracking-widest mb-22'>
            <h5 className=''>О нас</h5>
          </div>
          <div className=' w-[143px] h-[10 px] font-[Droid Sans]  font-normal text-[10px] leading-[12px]'>
            <p className="mb-22">Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</p>
            <p>Все инструменты проверены, отстроены и доведены до идеала!</p>
          </div>
        </div>

        {/**ИНФОРМАЦИЯ */}
        <div className='w-[145px] h-[150px]'>
          <div className=' w-[124px] h-[30px] font-[Droid Sans] font-normal text-sm leading-[44px] tracking-widest mb-22'>
            <h5 className=''>Информация</h5>
          </div>
          <AppNavFooter/>
        </div>

        {/**КОНТАКТЫ */}
        <div className='w-[145px] h-[150px]'>
          <div className=' w-[124px] h-[30px] font-[Droid Sans] font-normal text-sm leading-[44px] tracking-widest mb-22'>
            <h5 className=''>Контакты</h5>
          </div>
          <div className=' w-[143px] h-[10 px] font-[Droid Sans]  font-normal text-[10px] leading-[12px]'>
            <p className="mb-22"> Санкт-Петербург, м. Невский проспект, ул. Казанская 6.</p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <PhoneIcon />
              <a href="8-812-500-50-50" className="text-white">8-812-500-50-50</a>
            </p>
            <p className=""> Режим работы:</p>
            <p className=" flex items-center justify-center md:justify-start">
              <ClockIcon />
              с 11:00 до 20:00,
            </p>
            <p>без выходных.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer