import React from "react";
import Line19 from "../../../assets/Line19";
import { create } from "zustand";
import Guitars, { Guitar } from "../../../Data";
import { useAppStore } from "../../../store/AppStore";

interface GuitarProps {
  guitar: Guitar;
}

const SortPrice = () => {
  const minPrice = useAppStore((state) => state.minPrice);
  const setMinPrice = useAppStore((state) => state.setMinPrice);

  const maxPrice = useAppStore((state) => state.maxPrice);
  const setMaxPrice = useAppStore((state) => state.setMaxPrice);

  return (
    <>
      <h2 className="font-[Open Sans] font-bold text-2xl leading-[100%] tracking-normal">
        Цена
      </h2>
      <div className="w-full flex justify-between items-center mt-10 font-[Open Sans] font-normal text-sm leading-[10px] tracking-[5%]">
        <input
          type="number"
          placeholder="1000"
          className="w-full h-[30px] px-2 py-2 border border-gray-300 rounded-xs"
          value={minPrice === 0 ? "" : minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
        <Line19 />
        <input
          type="number"
          placeholder="3000"
          className="w-full h-[30px] px-2 py-2 border border-gray-300 rounded-xs"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>
    </>
  );
};

export default SortPrice;
