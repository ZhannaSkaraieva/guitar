import React from "react";
import { useModalStore } from "../../../store/ModalStore";
import ModalCard from "../../catalog/components/ModalCard";
import { Guitar } from "../../../Data";
import Modal from "../../../components/Modal";

interface ProductButtonProps {
  guitar: Guitar;
}

const ProductButton: React.FC<ProductButtonProps> = ({ guitar }) => {
  const isOpenModalId = useModalStore((state) => state.isOpenModalId);
  const setIsOpenModalId = useModalStore((state) => state.setIsOpenModalId);
  return (
    <>
      <div className="flex flex-col w-[246px] h-[165px] mt-4 border-2 border-[#585757B2] rounded-xs items-center justify-center self-start">
        <p className="flex justify-between w-full my-3 p-2">
          <span>Цена:</span>
          <span className="font-[Open Sans] font-bold not-italic text-xl leading-none tracking-[5%] text-right">
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "UAH",
            }).format(guitar.price)}
          </span>
        </p>
        <button
          className="flex bg-[#C90606] w-[225px] h-[45px]  rounded-[2px]  text-xs font-medium uppercase leading-normal text-white  items-center justify-center whitespace-nowrap"
          onClick={() => setIsOpenModalId(guitar.id)}
        >
          Добавить в корзину
        </button>
      
      </div>
      {/*{isOpenModalId === guitar.id && (
        <Modal onClose={() => setIsOpenModalId(null)}>
          <ModalCard guitar={guitar} />
        </Modal>
      )}**/}
    </>
  );
};

export default ProductButton;
