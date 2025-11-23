import React from "react";
import { NavLink } from "react-router-dom";

const LoginModal = () => {
  return (
    <>
      <div className=" mt-[-34px]">
        <img src="../../../../image/Electro_4.png" alt="Electro Guitar" />
      </div>

      <div className="flex flex-col items-center justify-center bg-white w-full">
        <h1 className="text-[#131212] font-[Open_Sans] not-italic font-bold text-center tracking-wider text-[18px] leading-[40px]">
          Вхід
        </h1>
        <form action="">
          <div className="flex flex-col mb-4">
            <label className="font-[Open Sans] font-normal text-sm leading-[10px] tracking-[5%] mb-2">
              Enter your email:{" "}
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="w-[200px] h-[30px] border border-[#585757] rounded px-3 mb-3"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-[Open Sans] font-normal text-sm leading-[10px] tracking-[5%] mb-2">
              Enter your password:{" "}
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="w-[200px] h-[30px] border border-[#585757] rounded px-3 mb-3"
            />
          </div>
          <div >
            <button
              type="submit"
              value="Subscribe!"
              className="w-[280px] h-[45px]  bg-[#131212] rounded-xs font-[Open_Sans] text-base font-bold text-[#FFFFFF] mb-4"
            >
              {" "}
              Вхід у систему
            </button>
          </div>
          <div>
            <span className="font-[Open Sans] font-normal text-sm leading-[10px] tracking-[5%] mr-2">
              Немає аккаунта?
            </span>
            <button
              type="submit"
              value="Subscribe! "
              className="font-[Open Sans] font-normal text-sm leading-[10px] tracking-[5%] mb-4 underline text-[#EB5555]"
            >
              {" "}
              Зареєструйтесь ›
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginModal;
