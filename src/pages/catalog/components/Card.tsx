import React from "react";
import { Guitar } from "../../../Data";
import { Link } from "react-router-dom";
import CardBasketIcon from "../../../assets/CardBasketIcon";
import ModalCard from "./ModalCard";
import { useModalStore } from "../../../store/ModalStore";
import StarRatingAverage from "../../productpage/components/StarRatingAverage";

// Компонент Cards для отображения карточек товаров в каталоге
interface GuitarProps {
  guitar: Guitar;
}

const Card: React.FC<GuitarProps> = ({ guitar}) => {

  const setModallel = useModalStore((state) => state.setModallel);

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
        <div className="flex justify-start p-2 gap-2.5 items-center">
          {/*<StarRatingAverage guitar={guitar} />**/}
        </div>

        {/* Заголовок и цена */}
        <div className=" flex flex-col p-2">
          <div className="flex flex-row justify-between items-start">
            <h5 className="font-[Open_Sans] font-normal not-italic text-sm/tight leading-none tracking-wider">
              {guitar.title}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-nowrap">
              {guitar.price} ₴
            </p>
          </div>
        </div>

        {/* Кнопки Подробнее и Купить */}
        <div className="flex flex-row gap-2.5 justify-between p-2">
          <Link to={`/catalog/${guitar.id}`} className="flex-1">
            <button
              type="button"
              className=" bg-[#131212] w-full h-min rounded-[2px] px-2.5 py-1.5 text-xs font-medium uppercase leading-normal text-white text-nowrap items-center justify-center"
            >
              Подробнее
            </button>
          </Link>

          {/* Кнопка Купить ВЫЗЫВАЕТ МОДАЛЬНОЕ ОКНО  */}
          <button
            type="button"
            className="flex-1 flex bg-[#C90606]  h-min rounded-[2px] px-2.5 py-1.5 text-xs font-medium uppercase leading-normal text-white  items-center justify-center gap-1 whitespace-nowrap"
            onClick={() => setModallel(<ModalCard guitarId={guitar.id} />)}
          >
            <CardBasketIcon />
            Купить
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
