import React, { useContext, useState } from "react";
import Guitars, { Guitar } from "../../Data";
import Line3 from "../../assets/Line3";
import { CartContext } from "../../features/ContextProvider";
import BasketGuitar from "./components/BasketGuitar";
import { totalProductPrice } from "../../features/CartReduser";
import UseCoupon from "./components/UseCoupon";
import Coupons from "../../DataCoupon";
import { useCartStore } from "../../store/CartStore";

const Basket = () => {
  const discountType = useCartStore((state) => state.discountType);
  const setDiscountType = useCartStore((state) => state.setDiscountType);

  const discountValue = useCartStore((state) => state.discountValue);
  const setDiscountValue = useCartStore((state) => state.setDiscountValue);

  const cart = useContext(CartContext);

  const arr = cart.cart.guitars.map((guitar: Guitar) => (
    <BasketGuitar key={guitar.id} guitar={guitar} />
  ));

  const discount = () => {
    const total = totalProductPrice(cart.cart.guitars);
    if (discountType === "percentage") {
      return (total * discountValue) / 100;
    } else if (discountType === "fixed") {
      return total - discountValue;
    }
    return 0;
  };

  const totalDiscountPrice = () => {
    return totalProductPrice(cart.cart.guitars) - discount();
  };

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
          <UseCoupon />

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
                {discount()} UAH
              </span>
            </div>
            <div className="my-4 flex justify-between font-[Open_Sans] font-bold not-italic text-xl leading-none tracking-[5%] text-start">
              <span>К оплате:</span>
              <span className=" item-right">{totalDiscountPrice()} UAH</span>
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
