import React from "react";
import Networks from "./components/Networks";
import GuitarIcon from "../assets/GuitarIcon";
import ClockIcon from "../assets/ClockIcon";
import PhoneIcon from "../assets/PhoneIcon";
import AppNavFooter from "../route/AppNavFooter";

const Footer = () => {
  return (
    <div className=" box-border flex  h-min max-sm:flex-col items-center justify-around bg-black text-white py-5 md:py-15 lg:py-20">
      <div className="flex flex-col items-center w-[9rem] xl:w-44 max-sm:gap-2 gap-20 ">
        <GuitarIcon />
        <Networks />
      </div>

      {/**О НАС */}
      <div className=" box-border sm:w-[9rem] xl:w-48 h-min  flex-col ">
        <div className=" w-full max-sm:text-center font-[Droid Sans] font-normal text-sm xl:text-2xl leading-[2.8rem] tracking-widest">
          <h5 className="">О нас</h5>
        </div>
        <div className=" w-full max-sm:flex-row font-[Droid Sans]  font-normal text-[0.63rem] xl:text-sm leading-[0.8rem] xl:leading-[1.25rem]">
          <p className="my-4">
            Магазин гитар, музыкальных инструментов и гитарная мастерская в
            Санкт-Петербурге.
          </p>
          <p className="my-4">
            Все инструменты проверены, отстроены и доведены до идеала!
          </p>
        </div>
      </div>

      {/**ИНФОРМАЦИЯ */}
      <div className="sm:w-[9rem] xl:w-48 h-min flex-col ">
        <div className=" w-full max-sm:text-center font-[Droid Sans] font-normal text-sm xl:text-2xl leading-[2.8rem] tracking-widest">
          <h5 className="">Информация</h5>
        </div>
        <div className="my-4">
          <AppNavFooter />
        </div>
      </div>

      {/**КОНТАКТЫ */}
      <div className="sm:w-[9rem] xl:w-48 h-min flex-col ">
        <div className=" w-full max-sm:text-center font-[Droid Sans] font-normal text-sm xl:text-2xl leading-[2.8rem] tracking-widest">
          <h5 className="">Контакты</h5>
        </div>
        <div className=" w-full  my-4 font-[Droid Sans]  font-normal text-[0.63rem] xl:text-sm leading-[0.75rem] xl:leading-[1.25rem]">
          <div>
            <p> Санкт-Петербург, м. Невский проспект, ул. Казанская 6.</p>
            <div className="mb-4 flex items-center justify-start">
              <PhoneIcon />
              <a href="tel:8-812-500-50-50" className="text-white">
                8-812-500-50-50
              </a>
            </div>
          </div>
          <div>
            <p className=""> Режим работы:</p>
            <p className=" flex items-center justify-start">
              <ClockIcon />
              <span className="ml-2">с 11:00 до 20:00,</span>
            </p>
            <p>без выходных.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
