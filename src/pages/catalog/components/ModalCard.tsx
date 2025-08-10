import React, { useContext, useState } from "react";
import { useAppStore } from "../../../store/AppStore";
import { Guitar } from "../../../Data";
import ModalItemAdd from "./ModalItemAdd";
import { CartContext } from "../../../features/ContextProvider";



interface GuitarProps {
  guitar: Guitar;
}
const ModalCard: React.FC<GuitarProps> = ({ guitar }) => {
  const setIsOpenModalId = useAppStore((state) => state.setIsOpenModalId);

  const isClosedModalId = useAppStore((state) => state.isClosedModalId);
  const setIsClosedModalId = useAppStore((state) => state.setIsClosedModalId);

  const setIsOpenModalAdd = useAppStore((state) => state.setIsOpenModalAdd);
  const isOpenModalAdd = useAppStore((state) => state.isOpenModalAdd);

  const { dispatch } = useContext(CartContext);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="flex flex-col w-[450px] h-auto inset-0 bg-white bg-opacity-50 items-center justify-center z-50">
          <div className="flex flex-row w-full my-10 items-center justify-around">
            <h1 className="text-[#131212] font-[Open_Sans] not-italic font-bold text-center tracking-wider text-[18px] leading-[15px]">
              Добавить товар в корзину
            </h1>
            <span
              onClick={() => setIsOpenModalId(null)}
              className="cursor-pointer text-2xl leading-non"
            >
              &times;
            </span>
          </div>
          <div className="flex flex-row w-full items-start justify-start">
            <div className="flex mx-8 items-center justify-center">
              <img src={guitar.image} alt={guitar.title} />
            </div>
            <div className="flex flex-col items-start justify-start">
              <h3 className=" my-6 font-[Open Sans] font-bold not-italic text-xl leading-none tracking-[5%] text-right">
                {guitar.title.toUpperCase()}
              </h3>
              <p className="my-1 font-[Open Sans] font-normal not-italic text-xl leading-none tracking-[5%] text-right">
                Артикул: {guitar.article}
              </p>
              <div className=" flex">
                <p className="my-1 font-[Open Sans] font-normal not-italic text-xl leading-none tracking-[5%] text-right">
                  {guitar.type} ,
                </p>
                <p className="my-1 font-[Open Sans] font-normal not-italic text-xl leading-none tracking-[5%] text-right">
                  {guitar.strings} струнная
                </p>
              </div>
              <div className="flex my-3 items-center justify-center font-[Open Sans] font-bold not-italic text-xl leading-none tracking-[5%] text-right">
                <p> ЦЕНА : {guitar.price} грн.</p>
              </div>
            </div>
          </div>
          <button
            className="flex-1 flex bg-[#C90606] w-[225px] h-[45px] my-8 rounded-[2px] px-2.5 py-1.5 text-xs font-medium uppercase leading-normal text-white  items-center justify-center gap-1 whitespace-nowrap"
            onClick={() => {
              setIsOpenModalAdd(true);
              setIsClosedModalId(true);
              dispatch({ type: "Add", payload: guitar });
            }}
          >
            Добавить в корзину
          </button>

          {isClosedModalId && isOpenModalAdd && <ModalItemAdd />}
        </div>
      </div>
    </>
  );
};

export default ModalCard;
