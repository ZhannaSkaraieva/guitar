import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Guitar } from "../../Data";
import Reviews from "../catalog/components/Reviews";
import Rating from "../catalog/components/RatingTotal";
import Tab from "./components/Tab";
import Line41 from "../../assets/Line41";
import { CartContext } from "../../features/ContextProvider";
import { useModalStore } from "../../store/ModalStore";
import ModalCard from "../catalog/components/ModalCard";

interface ProductPageProps {
  guitars: Guitar[];
}

export const ProductPage: React.FC<ProductPageProps> = ({ guitars }) => {
  const { id } = useParams();
  const result = guitars.find((guitar) => guitar.id === Number(id));
  if (!result) {
    return <div>Товар не найден</div>;
  }
  const isOpenModalId = useModalStore((state) => state.isOpenModalId);
  const setIsOpenModalId = useModalStore((state) => state.setIsOpenModalId);

  return (
    <>
      <div className="flex flex-row justify-between items-center  w-full">
        <div className="w-[220px] h-[260px] p-2.5 flex justify-center items-center">
          <img src={result.image} alt={result.title} className="" />
        </div>
        <div className="flex flex-col items-start ">
          <h3 className=" my-2 font-[Open Sans] font-bold not-italic text-xl leading-none tracking-[5%] text-right">
            {result.title.toUpperCase()}
          </h3>
          <div className="flex flex-row  items-center mb-6">
            <Reviews />
            <Rating guitar={result} />
          </div>
          <div className="flex justify-start ">
            <Tab guitar={result} />
          </div>
        </div>
        <div className="flex flex-col w-[246px] h-[165px]  border-2 border-[#585757B2] rounded-xs items-center justify-center">
          <p className="flex justify-between w-full my-3 p-2">
            <span>Цена:</span>
            <span className="font-[Open Sans] font-bold not-italic text-xl leading-none tracking-[5%] text-right">
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "UAH",
              }).format(result.price)}
            </span>
          </p>
          <button
            className="flex bg-[#C90606] w-[225px] h-[45px]  rounded-[2px]  text-xs font-medium uppercase leading-normal text-white  items-center justify-center whitespace-nowrap"
            onClick={() => setIsOpenModalId(result.id)}
          >
            Добавить в корзину
          </button>
          {isOpenModalId === result.id && <ModalCard guitar={result} />}
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center w-full h-full my-8">
        <Line41 />
      </div>
    </>
  );
};
