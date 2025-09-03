import React from "react";
import VectorIconRed from "../../../assets/VectorIconRed";
import { Link } from "react-router-dom";
import { useModalStore } from "../../../store/ModalStore";

const PopUpFormAdd = () => {

  const setModallel = useModalStore((state) => state.setModallel);

  return (
    <>
      <div className="self-start mt-0">
        <img src="../../../../image/Electro_4.png" alt="Electro Guitar" />
      </div>

      <div className="flex my-8 px-10 flex-row w-full items-center justify-center">
        <VectorIconRed />
        <h1 className="text-[#131212] font-[Open_Sans] not-italic font-bold text-center tracking-wider text-[18px] leading-[40px]">
          Спасибо за ваш отзыв!
        </h1>
      </div>

      <div className="flex items-center justify-center w-full mb-6">
        <Link to={`/catalog`}>
          <button
            className="w-[140px] h-[45px] bg-[#131212] my-1 border-2 border-black font-[Open_Sans] rounded-xs font-bold not-italic text-sm leading-none tracking-[5%] text-center text-[#FEFAFA]"
            onClick={() => setModallel(null)}
          >
            К покупкам !
          </button>
        </Link>
      </div>
    </>
  );
};

export default PopUpFormAdd;
