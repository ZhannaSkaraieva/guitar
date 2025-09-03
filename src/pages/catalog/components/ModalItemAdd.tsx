import React, { useState } from "react";
import { useAppStore } from "../../../store/AppStore";
import VectorIconRed from "../../../assets/VectorIconRed";
import { Link } from "react-router-dom";
import { useModalStore } from "../../../store/ModalStore";

const ModalItemAdd = () => {

    const setModallel = useModalStore((state) => state.setModallel);

  return (
    <>
      <div className=" mt-[-34px]">
        <img src="../../../../image/Electro_4.png" alt="Electro Guitar" />
      </div>
      <div className="flex my-8 px-12 flex-row w-full  items-start justify-between">
        <span className="mt-2">
          <VectorIconRed />
        </span>
        <h1 className="text-[#131212] font-[Open_Sans] not-italic font-bold text-center tracking-wider text-lg leading-[40px]">
          Товар успешно добавлен в корзину
        </h1>
      </div>
      <div className="flex items-center justify-around w-full mb-8">
        <Link to={`/basket`}>
          <button
            className="w-[170px] h-[45px]  border-2 bg-black border-black rounded-xs font-[Open_Sans] font-bold not-italic  text-sm text-white leading-none tracking-tight text-center"
            onClick={() => setModallel(null)}
          >
            Перейти в корзину
          </button>
        </Link>
        <Link to={`/catalog`}>
          <button
            className="w-[170px] h-[45px]  border-2 border-black font-[Open_Sans] rounded-xs font-normal not-italic text-xs leading-none tracking-tight text-center text-[#585757]"
            onClick={() => setModallel(null)}
          >
            Продолжить покупки
          </button>
        </Link>
      </div>
    </>
  );
};

export default ModalItemAdd;
