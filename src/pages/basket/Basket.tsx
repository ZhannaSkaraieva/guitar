import React, { useContext } from "react";
import Guitars, { Guitar } from "../../Data";
import Line3 from "../../assets/Line3";
import { CartContext } from "../../features/ContextProvider";
import BasketGuitar from "./components/BasketGuitar";
import { totalProductPrice } from "../../features/CartReduser";

const Basket = () => {
  const cart = useContext(CartContext);

  const arr = cart.cart.guitars.map((guitar: Guitar) => (
    <BasketGuitar key={guitar.id} guitar={guitar} />
  ));

  return (
    <>
      <div className="">
        {/**ЛИНИЯ */}
        <div className="flex flex-1 items-center justify-center w-full h-full my-8">
          <Line3 />
        </div>

        {/**Отображение товара в корзине */}
        {arr}

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
                {totalProductPrice(cart.cart.guitars)} UAH
              </span>
            </div>
            <div className="my-4 flex justify-between font-[Open_Sans] font-bold not-italic text-xl leading-none tracking-[15%] text-start">
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
