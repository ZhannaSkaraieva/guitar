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
                <div>
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "UAH",
                  }).format(guitar.price)}
                </div>
              </div>

              {/**ЛИНИЯ */}
            </div>
            <div className="flex flex-1 items-center justify-center w-full h-full my-8">
              <Line3 />
            </div>
          </div>
        ))}

        <div className="flex justify-between">
          {/**ПРОМОКОД НА СКИДКУ */}
          <div>
            <h2 className="my-4 font-[Open_Sans] font-bold not-italic text-xl leading-none tracking-[5%] text-start">
              Промокод на скидку
            </h2>
            <p className="my-4 font-[Open_Sans] font-normal not-italic text-lg leading-none tracking-[5%] text-right text-[#585757]">
              Введите свой промокод, если он у вас есть.
            </p>
            <div className="flex">
              <button className="w-[180px] h-[40px] my-1 border-2 border-black font-[Open_Sans] rounded-xs font-normal not-italic text-xs leading-none tracking-[5%] text-center text-[#585757]">
                Введите промокод
              </button>
              <button className="w-[180px] h-[40px] my-1 border-2 bg-black border-black rounded-xs font-[Open_Sans] font-bold not-italic  text-xl text-white leading-none tracking-[5%] text-center">
                Применить
              </button>
            </div>
            <p className="my-1 font-[Open_Sans] font-normal not-italic text-[10px] text-[#07742C] leading-none tracking-[5%] text-left">
              Промокод принят
            </p>
          </div>

          {/**ИТОГОВАЯ ЦЕНА */}
          <div className="w-[220px]">
            <div className="my-4 flex justify-between font-[Open_Sans] font-bold not-italic text-xl leading-none tracking-[15%] text-start">
              <span>Всего:</span>
              <span className="font-[Droid_Sans] font-normal text-right">
                52 000 UAH
              </span>
            </div>
            <div className="my-4 flex justify-between font-[Open_Sans] font-bold not-italic text-xl leading-none tracking-[5%] text-start">
              <span>Скидка:</span>
              <span className="font-normal text-[#C90606] text-right">
                - 3 000 UAH
              </span>
            </div>
            <div className="my-4 flex justify-between font-[Open_Sans] font-bold not-italic text-xl leading-none tracking-[5%] text-start">
              <span>К оплате:</span>
              <span className=" item-right">49 000 UAH</span>
            </div>
            <button className="w-[220px] h-[50px] bg-[#C90606] rounded-xs text-center text-white my-4 font-[Open_Sans] font-bold not-italic text-lg leading-none tracking-[5%] ">
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
