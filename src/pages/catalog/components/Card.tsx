import React from "react";
import { Guitar } from "../../../Data";
import Reviews from "./Reviews";
import Rating from "./Rating";
import CartIcom from "./CartIcom";

// Компонент Cards для отображения карточек товаров в каталоге
interface GuitarProps {
  guitar: Guitar;
}
const Card: React.FC<GuitarProps> = ({ guitar }) => {
  return (
    <>
      <div className=" bg-white border border-[#DDDADA] ">
        <a href="#!" className="grid place-items-center ">
          <img
            className=" h-48 p-4 place-items-center"
            src={guitar.image}
            alt={guitar.title}
          />
        </a>
        <div className="flex justify-start p-2">
          <Reviews />
          <Rating guitar={guitar} />
        </div>

        <div className=" flex flex-col p-2">
          {/* Заголовок и цена */}
          <div className="flex flex-row justify-between items-start">
            <h5 className="font-[Open Sans] font-normal not-italic text-sm/tight leading-none tracking-wider">
              {guitar.title}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-nowrap">
              {guitar.price} ₴
            </p>
          </div>
        </div>

        {/* Кнопки Подробнее и Купить */}
        <div className="flex flex-row gap-2.5 justify-between p-2">
          <button
            type="button"
            className=" bg-[#131212] h-min rounded-[2px] px-2.5 py-1.5 text-xs font-medium uppercase leading-normal text-white text-nowrap"
          >
            Подробнее
          </button>
          <button
            type="button"
            className="flex bg-[#C90606] h-min rounded-[2px] px-2.5 py-1.5 text-xs font-medium uppercase leading-normal text-white text-nowrap text-inline-flex items-center gap-0.5"
          >
            <CartIcom />
            Купить
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
