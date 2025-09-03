import React, { useContext } from "react";
import CrossIcon from "../../../assets/CrossIcon";
import { Guitar } from "../../../Data";
import MinusIcon from "../../../assets/MinusIcon";
import PlusIcon from "../../../assets/PlusIcon";
import Line3 from "../../../assets/Line3";
import { CartContext } from "../../../features/ContextProvider";
import { useModalStore } from "../../../store/ModalStore";
import PopUp_delite from "./PopUp_delite";
import StarRatingAverage from "../../productpage/components/StarRatingAverage";

interface BasketGuitarProps {
  guitar: Guitar;
}

const BasketGuitar: React.FC<BasketGuitarProps> = ({ guitar }) => {
  const { cart, dispatch } = useContext(CartContext);

  {
    /**СЧЕТЧИК + */
  }
  const Increase = (id: number) => {
    const cartProductIn = cart.guitars.find(
      (guitar: { id: number }) => guitar.id === id,
    );
    dispatch({ type: "Increase", payload: { id }, quantity: 1 });
  };

  {
    /**СЧЕТЧИК - */
  }
  const Decrease = (id: number) => {
    const cartProductDe = cart.guitars.find(
      (guitar: { id: number }) => guitar.id === id,
    );
    dispatch({ type: "Decrease", payload: { id }, quantity: 1 });
  };

  const setModallel = useModalStore((state) => state.setModallel);

  return (
    <div>
      <div>
        <div className="flex flex-row">
          {/**УДАЛЕНИЕ */}
          <div className=" flex justify-end items-start">
            <button
              title="Cross"
              onClick={() =>
                setModallel(
                  <PopUp_delite guitar={guitar} />)}
            >
              <CrossIcon />
            </button>
          </div>

          {/**ОПИСАНИЕ ГИТАРЫ */}
          <div className="basis-1/6 flex items-center justify-center">
            <img src={guitar.image} alt={guitar.title} />
          </div>
          <div className="basis-2/6 flex flex-col items-start ">
            <h3 className="my-4 font-[Open Sans] font-bold not-italic text-xl leading-none tracking-[5%] text-right">
              {guitar.title.toUpperCase()}
            </h3>
            <StarRatingAverage />
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
          </div>
          <div className="basis-1/6 flex items-center justify-center font-[Open Sans] font-normal not-italic text-xl leading-none tracking-[5%] text-right">
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "UAH",
            }).format(guitar.price)}
          </div>

          {/**ВЫБОР КОЛЛИЧЕСТВА */}

          <div className="basis-1/6 flex flex-row  items-center justify-center ">
            <div>
              <button
                title="Decrease"
                className=" flex w-7 h-7 border-y border-l border-black items-center justify-center "
                onClick={() => Decrease(guitar.id)}
              >
                <MinusIcon />
              </button>
            </div>
            <div>
              <input
                title="quantity"
                type="number"
                value={guitar.quantity}
                className=" flex w-7 h-7 border border-black items-center justify-center outline-none text-center"
              />
            </div>
            <div>
              <button
                title="Increase"
                className=" flex w-7 h-7 border-y border-r border-black items-center justify-center "
                onClick={() => Increase(guitar.id)}
              >
                <PlusIcon />
              </button>
            </div>
          </div>
          <div className="basis-1/6 flex items-center justify-center font-[Open Sans] font-bold not-italic text-xl leading-none tracking-[5%] text-right">
            <div>
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "UAH",
              }).format(guitar.price * (guitar.quantity ?? 1))}
            </div>
          </div>

          {/**ЛИНИЯ */}
        </div>
        <div className="flex flex-1 items-center justify-center w-full h-full my-8">
          <Line3 />
        </div>
      </div>
    </div>
  );
};

export default BasketGuitar;
