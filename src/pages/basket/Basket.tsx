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
        <div className="flex flex-1 items-center justify-center w-full h-full">
          <Line3 />
        </div>

        {/**УДАЛЕНИЕ */}
        <div className=" flex items-start my-6">
          <button>
            <CrossIcon />
          </button>
        </div>

        {/**Отображение товара в корзине */}
        <div className="flex flex-row">
          <div className="basis-1/6 flex items-center justify-center">
            <img src="./../../image/Electro.png"  alt={guitars.title} />
          </div>
          <div className="basis-2/6 flex flex-col items-start ">
            <h3 className="my-4 font-[Open Sans] font-bold not-italic text-xl leading-none tracking-[5%] text-right">title</h3>
            <p className="my-1 font-[Open Sans] font-normal not-italic text-xl leading-none tracking-[5%] text-right">article</p>
            <p className="my-1 font-[Open Sans] font-normal not-italic text-xl leading-none tracking-[5%] text-right">type</p>
            <p className="my-1 font-[Open Sans] font-normal not-italic text-xl leading-none tracking-[5%] text-right">strings</p>
          </div>
          <div className="basis-1/6 flex items-center justify-center font-[Open Sans] font-normal not-italic text-xl leading-none tracking-[5%] text-right"> 20000,00</div>

          <div className="basis-1/6 flex flex-row  items-center justify-center ">
            <div >
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
            <div> 2000,00</div>
          </div>
        </div>

        {/**ЛИНИЯ */}
        <div className="flex flex-1 items-center justify-center w-full h-full">
          <Line3 />
        </div>
      </div>
    </>
  );
};

export default Basket;
