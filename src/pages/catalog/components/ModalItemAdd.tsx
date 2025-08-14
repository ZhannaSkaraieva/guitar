import React, { useState } from "react";
import { useAppStore } from "../../../store/AppStore";
import VectorIconRed from "../../../assets/VectorIconRed";
import { Link } from "react-router-dom";
import { useModalStore } from "../../../store/ModalStore";

const ModalItemAdd = () => {
  const isOpenModalId = useModalStore((state) => state.isOpenModalId);
  const setIsOpenModalId = useModalStore((state) => state.setIsOpenModalId);

  const setIsOpenModalAdd = useModalStore((state) => state.setIsOpenModalAdd);
  const isOpenModalAdd = useModalStore((state) => state.isOpenModalAdd);

  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className=" relative flex flex-col w-[450px] h-auto inset-0 bg-white bg-opacity-50 items-center justify-end z-50">
        <div className="absolute top-0 left-0">
          <img src="../../../../image/Electro_4.png" alt="Electro Guitar" />
        </div>
        <div className="w-full flex justify-end px-4 mt-2">
          <span
            onClick={() => setIsOpenModalAdd(false)}
            className="cursor-pointer text-2xl leading-non"
          >
            &times;
          </span>
        </div>

        <div className="flex my-20 px-10 flex-row w-full  items-center justify-between">
          <VectorIconRed />
          <h1 className="text-[#131212] font-[Open_Sans] not-italic font-bold text-center tracking-wider text-[18px] leading-[40px]">
            Товар успешно добавлен в корзину
          </h1>
        </div>

        <div className="flex items-center justify-around w-full mb-8">
          <Link to={`/basket`}>
            <button
              className="w-[180px] h-[40px] my-1 border-2 bg-black border-black rounded-xs font-[Open_Sans] font-bold not-italic  text-sm text-white leading-none tracking-[5%] text-center"
              onClick={() => setIsOpenModalAdd(false)}
            >
              Перейти в корзину
            </button>
          </Link>
          <Link to={`/catalog`}>
            <button
              className="w-[180px] h-[40px] my-1 border-2 border-black font-[Open_Sans] rounded-xs font-normal not-italic text-xs leading-none tracking-[5%] text-center text-[#585757]"
              onClick={() => setIsOpenModalAdd(false)}
            >
              Продолжить покупки
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalItemAdd;
