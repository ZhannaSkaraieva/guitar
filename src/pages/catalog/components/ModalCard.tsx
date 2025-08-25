import React, { useContext, useState } from "react";
import { Guitar } from "../../../Data";
import ModalItemAdd from "./ModalItemAdd";
import { CartContext } from "../../../features/ContextProvider";
import { useModalStore } from "../../../store/ModalStore";
import { createPortal } from "react-dom";
import Modal from "../../../components/Modal";

interface GuitarProps {
  guitar: Guitar;
}
const ModalCard: React.FC<GuitarProps> = ({ guitar }) => {
  const isOpenModalAdd = useModalStore((state) => state.isOpenModalAdd);
  const setIsOpenModalAdd = useModalStore((state) => state.setIsOpenModalAdd);

  const setIsOpenModalId = useModalStore((state) => state.setIsOpenModalId);
  const isOpenModalId = useModalStore((state) => state.isOpenModalId);

  const { dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    dispatch({ type: "Add", payload: guitar });
    setIsOpenModalId(null);
    setTimeout(() => setIsOpenModalAdd(true), 500);
  };

  return (
    <>
      <div className="w-full">
        <div className="flex flex-row w-full my-6 items-center justify-around">
          <h1 className="text-[#131212] font-[Open_Sans] not-italic font-bold text-center tracking-wider text-[18px] leading-[15px]">
            Добавить товар в корзину
          </h1>
        </div>
        <div className="flex flex-row w-full items-start justify-start">
          <div className="flex mx-8 pl-6 items-center justify-center">
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
        <div className="flex w-full items-center justify-center">
          <button
            className=" flex bg-[#C90606] w-[225px] h-[45px] my-8 rounded-[2px] px-2.5 py-1.5 text-xs font-medium uppercase leading-normal text-white  items-center justify-center gap-1 whitespace-nowrap"
            onClick={() => { handleAddToCart }}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
      {/*{isOpenModalAdd && (
        <Modal onClose={() => setIsOpenModalAdd(false)}>
          <ModalItemAdd />
        </Modal>
      )}**/}
    </>
  );
};

export default ModalCard;
