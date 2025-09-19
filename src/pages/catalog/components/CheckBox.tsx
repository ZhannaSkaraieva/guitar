import React from "react";
import Line18 from "../../../assets/Line18";
import Guitars, { Guitar } from "../../../Data";
import { useAppStore } from "../../../store/AppStore";
import SortPrice from "./SortPrice";
import Line19 from "../../../assets/Line19";
import { SortType } from "./SortType";
import { SortString } from "./SortString";

interface GuitarProps {
  guitar: Guitar[];
}
// Компонент CheckBox для фильтрации товаров в каталоге
const CheckBox: React.FC<GuitarProps> = ({ guitar }) => {
  return (
    <div className="w-full h-auto ">
      <h1 className="font-[Open_Sans] font-bold text-2xl leading-[100%] tracking-normal">
        Фильтр
      </h1>
      <div className="my-6">
        <Line18 />
      </div>

      {/**СОРТИРОВКА ПО ЦЕНЕ */}
      <div className="flex flex-col w-full">
        <SortPrice />
      </div>
      <div className="my-6">
        <Line18 />
      </div>

      {/**СОРТИРОВКА ПО ТИПУ ГИТАР */}
      <div className="box-border">
        <SortType />
      </div>
      <div className="my-6">
        <Line18 />
      </div>

      {/**СОРТИРОВКА ПО КОЛИЧЕСТВУ СТРУН */}
      <div className="box-border">
        <SortString />
      </div>
      <div className="my-6">
        <Line18 />
      </div>
    </div>
  );
};

export default CheckBox;
