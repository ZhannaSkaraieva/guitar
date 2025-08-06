import React from "react";
import Guitars, { Guitar } from "../../Data";
import CrossIcon from "../../assets/CrossIcon";
import MinusIcon from "../../assets/MinusIcon";
import PlusIcon from "../../assets/PlusIcon";
import Line3 from "../../assets/Line3";

interface BasketProps {
  guitars: Guitar[];
}

const Basket: React.FC<BasketProps> = ({ guitars }) => {
  return (
    <>
      <div className="">
        {/**ЛИНИЯ */}
        <div className="flex flex-1 items-center justify-center w-full h-full my-8">
          <Line3 />
        </div>

        {/**Отображение товара в корзине */}
        {guitars.map((guitar, id) => (
          <div key={id}>
            <div className="flex flex-row">

              {/**УДАЛЕНИЕ */}
              <div className=" flex justify-end items-start">
                <button>
                  <CrossIcon />
                </button>
              </div>

              {/**ОПИСАНИЕ ГИТАРЫ */}
              <div className="basis-1/6 flex items-center justify-center">
                <img src={guitar.image} alt={guitar.title} />
              </div>
              <div className="basis-2/6 flex flex-col items-start ">
                <h3 className="my-4 font-[Open Sans] font-bold not-italic text-xl leading-none tracking-[5%] text-right">
                  {guitar.title}
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
                </p></div>
              </div>
              <div className="basis-1/6 flex items-center justify-center font-[Open Sans] font-normal not-italic text-xl leading-none tracking-[5%] text-right">
                {" "}
                {guitar.price} ₴
              </div>

              {/**ВЫБОР КОЛЛИЧЕСТВА */}

              <div className="basis-1/6 flex flex-row  items-center justify-center ">
                <div>
                  <button className=" flex w-7 h-7 border-y border-l border-black items-center justify-center ">
                    <MinusIcon />
                  </button>
                </div>
                <div className=" flex w-7 h-7 border border-black items-center justify-center ">
                  <input />
                </div>
                <div>
                  <button className=" flex w-7 h-7 border-y border-r border-black items-center justify-center ">
                    <PlusIcon />
                  </button>
                </div>
              </div>
              <div className="basis-1/6 flex items-center justify-center font-[Open Sans] font-bold not-italic text-xl leading-none tracking-[5%] text-right">
                <div> {guitar.price} ₴</div>
              </div>


              {/**ЛИНИЯ */}
            </div>
            <div className="flex flex-1 items-center justify-center w-full h-full my-8">
              <Line3 />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Basket;
