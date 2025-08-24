import React, { useContext } from "react";
import { Guitar } from "../../../Data";
import { Link } from "react-router-dom";
import { CartContext } from "../../../features/ContextProvider";
import { useModalStore } from "../../../store/ModalStore";

interface PopUp_deliteProps {
  guitar: Guitar;
}

const PopUp_delite: React.FC<PopUp_deliteProps> = ({ guitar }) => {
  const { cart, dispatch } = useContext(CartContext);

  const isPopUpDeliteOpen = useModalStore((state) => state.isPopUpDeliteOpen);
  const setIsPopUpDeliteOpen = useModalStore(
    (state) => state.setIsPopUpDeliteOpen,
  );

  return (
    <>
      <div className="flex flex-row w-full my-10 items-center justify-around">
        <h1 className="text-[#C90606] font-[Open_Sans] not-italic font-bold text-center tracking-wider text-[18px] leading-[15px]">
          Удалить этот товар?
        </h1>
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
      <div className="flex items-center justify-around w-full mb-8">
        <Link to={`/basket`}>
          <button
            className="w-[180px] h-[40px] my-1 border-2 bg-black border-black rounded-xs font-[Open_Sans] font-bold not-italic  text-sm text-white leading-none tracking-[5%] text-center"
            onClick={() =>
              dispatch({ type: "Delete", payload: { id: guitar.id } })
            }
          >
            Удалить товар
          </button>
        </Link>
        <Link to={`/catalog`}>
          <button
            className="w-[180px] h-[40px] my-1 border-2 border-black font-[Open_Sans] rounded-xs font-normal not-italic text-xs leading-none tracking-[5%] text-center text-[#585757]"
            onClick={() => setIsPopUpDeliteOpen(null)}
          >
            Продолжить покупки
          </button>
        </Link>
      </div>
    </>
  );
};

export default PopUp_delite;
