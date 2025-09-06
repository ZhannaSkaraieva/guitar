import React from "react";
import { Guitar } from "../../../Data";
import IconArrowUp from "../../../assets/IconArrowUp";
import { IconArrowDown } from "../../../assets/IconArrowDown";
import { useAppStore } from "../../../store/AppStore";

interface GuitarProps {
  guitar: Guitar[];
}

const Sort: React.FC<GuitarProps> = () => {

  //сортировка товара по цене и популярности
  const sortBy = useAppStore((state) => state.sortBy);
  const sortOrder = useAppStore((state) => state.sortOrder);
  const setSortBy = useAppStore((state) => state.setSortBy);
  const setSortOrder = useAppStore((state) => state.setSortOrder);

  const handleArrowClick = (order: "asc" | "desc") => {
    if (!sortBy) {
      setSortBy("price"); // если сортировка не выбрана, ставим "по цене"
    }
    setSortOrder(order);
  };

  return (
    <div className="h-6 mb-10 flex justify-between items-center">
      <div className="flex items-start space-x-4">
        <p className="font-[Open Sans] font-normal not-italic text-base leading-none tracking-[5%] text-neutral-950 ">
          Сортировать:
        </p>
        <button
          aria-label="Сортировать по цене"
          className="font-[Open Sans] font-normal not-italic text-base leading-none tracking-[5%] text-neutral-950 hover:text-neutral-600"
          onClick={() => {
            setSortBy("price");
          }}
        >
          по цене
        </button>
        <button
          aria-label="Сортировать по популярности"
          className="font-[Open Sans] font-normal not-italic text-base leading-none tracking-[5%] text-neutral-950 hover:text-neutral-600"
          onClick={() => {
            setSortBy("rating");
          }}
        >
          по популярности
        </button>
      </div>
      <div className="flex items-end space-x-2">
        <button
          aria-label="Сортировать по возрастанию" //помогает screen reader’ам
          title="Сортировать по возрастанию" //показывает всплывающую подсказку принаведении
          onClick={() => handleArrowClick("asc")}
        >
          <IconArrowUp color={sortOrder === "asc" ? "#131212" : "#585757"} />
        </button>
        <button
          aria-label="Сортировать по возрастанию"
          title="Сортировать по возрастанию"
          onClick={() => handleArrowClick("desc")}
        >
          <IconArrowDown color={sortOrder === "desc" ? "#131212" : "#585757"} />
        </button>
      </div>
    </div>
  );
};

export default Sort;
