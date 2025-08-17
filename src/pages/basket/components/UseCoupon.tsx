import React, { useDebugValue, useState } from "react";
import Coupons from '../../../DataCoupon';
import { useAppStore } from "../../../store/AppStore";
import { useCartStore } from "../../../store/CartStore";

interface Coupon {
    coupon: Coupon;
    }



const UseCoupon: React.FC = () => {
    
    const couponCode = useCartStore((state) => state.couponCode);
    const setCouponCode = useCartStore((state) => state.setCouponCode);//код купона

    const appliedCoupon = useCartStore((state) => state.appliedCoupon);
    const setAppliedCoupon = useCartStore((state) => state.setAppliedCoupon);//состояние применения купона
    
    const discountValue = useCartStore((state) => state.discountValue);
    const setDiscountValue = useCartStore((state) => state.setDiscountValue);//значение скидки
    
    

    //функция для обработки ввода купона

    const handleCouponInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCouponCode(e.target.value);
        setAppliedCoupon(null); // сбросить состояние применения купона при вводе нового кода
    }

    //функция для применения купона

    const handleApplyCoupon = () => {
        if (!couponCode.trim()) {
    // если поле пустое
    setAppliedCoupon(null);
    setDiscountValue(0);
    return;
  }

        
     
        const coupon = Coupons.find((coupon) => coupon.code.toUpperCase() === couponCode.toUpperCase());
        if (!coupon) {
            setAppliedCoupon("error");
            setDiscountValue(0);
            alert("Промокод не найден");
            return;
        }
        else {
            setAppliedCoupon("success");
            alert(`Промокод ${coupon.code} применён`);
            setDiscountValue(coupon.discount);
        }

        
        // if (!coupon.isActive) {
        //     setAppliedCoupon("промокод неактивен");
        //     setDiscountValue(0);
        //     return;
        // }
    

    }
        return (
            <>
                <div className="w-[400px] h-[200px]  rounded-xs ">
                    <h2 className="my-4 font-[Open_Sans] font-bold not-italic text-xl leading-none tracking-[5%] text-start">
                        Промокод на скидку
                    </h2>
                    <p className=" mb-6 font-[Open_Sans] font-normal not-italic text-lg leading-none tracking-[5%] text-start text-[rgb(88,87,87)]">
                        Введите свой промокод, если он у вас есть.
                    </p>
                    <div className="flex w-full">
                        <input
                            className="flex-1 w-[180px] h-[40px] my-1 border-2 border-black font-[Open_Sans] rounded-xs font-normal not-italic text-xs leading-none tracking-[5%] text-center text-[#585757]"
                            placeholder="Введите промокод"
                            value={couponCode}
                            onChange={handleCouponInput}
                        />
                        <button
                            className="flex-1 w-[180px] h-[40px] my-1 border-2 bg-black border-black rounded-xs font-[Open_Sans] font-bold not-italic  text-xl text-white leading-none tracking-[5%] text-center"
                            onClick={ handleApplyCoupon }
                        >
                            Применить
                        </button>
                    </div>
                    {appliedCoupon === "success" && (
                        <p className=" w-[200px] my-1 font-[Open_Sans] font-normal not-italic text-[10px] text-[#07742C] leading-none tracking-[5%] text-right">
                            Промокод принят
                        </p>)}
                    {appliedCoupon  === "error" &&
                            (<p className=" w-[200px] my-1 font-[Open_Sans] font-normal not-italic text-[10px] text-[#EB5555] leading-none tracking-[5%] text-right">
                            неверный промокод
                        </p>)}
                   
                </div>
            </>
        );
    };



    export default UseCoupon;
