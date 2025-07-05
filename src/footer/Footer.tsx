import React from "react";
import IconsBar from "../assets/IconsBar";
import Networks from "./components/Networks";
import GuitarIcon from "./components/GuitarIcon";
import ClockIcon from "../assets/ClockIcon";
import PhoneIcon from "../assets/PhoneIcon";
import AppNavFooter from "../route/AppNavFooter";
import Rectangle from "../assets/Rectangle";

const Footer = () => {
  return (
    <>
      <div className=" box-border flex h-[17.25rem]  items-center justify-around bg-black text-white ">
        <div className="flex flex-col items-start justify-between w-[9rem] h-[9.25rem]">
          <GuitarIcon />
          <Networks />
        </div>

        {/**О НАС */}
        <div className=" box-border w-[9rem] h-[9.25rem]  flex-col flow-root">
          <div className=" w-[3rem] h-[2rem]  font-[Droid Sans] font-normal text-sm leading-[2.8rem] tracking-widest">
            <h5 className="">О нас</h5>
          </div>
          <div className=" w-[9rem] h-[0.6rem] flow-root font-[Droid Sans]  font-normal text-[0.6rem] leading-[0.8rem]">
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
        <div className="w-[145px] h-[150px] flex-col flow-root">
          <div className=" w-[124px] h-[30px] font-[Droid Sans] font-normal text-sm leading-[44px] tracking-widest">
            <h5 className="">Информация</h5>
          </div>
          <div className="my-4">
            <AppNavFooter />
          </div>
        </div>

        {/**КОНТАКТЫ */}
        <div className="w-[145px] h-[150px] flex-col flow-root">
          <div className=" w-[124px] h-[30px] font-[Droid Sans] font-normal text-sm leading-[44px] tracking-widest">
            <h5 className="">Контакты</h5>
          </div>
          <div className=" w-[143px] h-[10 px] my-4 font-[Droid Sans]  font-normal text-[10px] leading-[12px]">
            <p> Санкт-Петербург, м. Невский проспект, ул. Казанская 6.</p>
            <p className="mb-4 flex items-center justify-start">
              <PhoneIcon />
              <a href="8-812-500-50-50" className="text-white">
                8-812-500-50-50
              </a>
            </p>
            <p className=""> Режим работы:</p>
            <p className=" flex items-center justify-start">
              <ClockIcon />с 11:00 до 20:00,
            </p>
            <p>без выходных.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
