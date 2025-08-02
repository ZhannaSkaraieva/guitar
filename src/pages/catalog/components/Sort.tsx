import React from "react";
import { Guitar } from "../../../Data";
import IconArrowUp from "../../../assets/IconArrowUp";
import { IconArrowDown } from "../../../assets/IconArrowDown";
import { useAppStore } from "../../../store/AppStore";

interface GuitarProps {
  guitar: Guitar[];
}

const Sort: React.FC<GuitarProps> = () => {
  const sortBy = useAppStore((state) => state.sortBy);
  const setSortBy = useAppStore((state) => state.setSortBy);

  return (
    <div className="h-6 mb-10 flex justify-between items-center">
      <div className="flex items-start space-x-4">
        <p className="font-[Open Sans] font-normal not-italic text-base leading-none tracking-[5%] text-neutral-950 ">
          Сортировать:
        </p>
        <button
          className="font-[Open Sans] font-normal not-italic text-base leading-none tracking-[5%] text-neutral-950 hover:text-neutral-600"
          onClick={() => {
            setSortBy("SortPrice");
          }}
        >
          по цене
        </button>
        <button
          className="font-[Open Sans] font-normal not-italic text-base leading-none tracking-[5%] text-neutral-950 hover:text-neutral-600"
          onClick={() => {
            setSortBy("SortRating");
          }}
        >
          по популярности
        </button>
      </div>
      <div className="flex items-end space-x-2">
        <button
          onClick={() => {
            setSortBy("ArrowUp");
          }}
        >
          <IconArrowUp />
        </button>
        <button
          onClick={() => {
            setSortBy("ArrowDown");
          }}
        >
          <IconArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Sort;
