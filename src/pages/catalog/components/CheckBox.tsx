import React from "react";
import Line18 from "../../../assets/Line18";
import Guitars, { Guitar } from "../../../Data";
import { useAppStore } from "../../../store/AppStore";
import SortPrice from "./SortPrice";
import Line19 from "../../../assets/Line19";

interface GuitarProps {
  guitar: Guitar;
}
// Компонент CheckBox для фильтрации товаров в каталоге
const CheckBox: React.FC<GuitarProps> = ({ guitar }) => {
  const sortBy = useAppStore((state) => state.sortBy);
  const setSortBy = useAppStore((state) => state.setSortBy);

  const uniqueTypes = Guitars.map((guitar) => guitar.type).filter(
    (type, index, self) => self.indexOf(type) === index,
  );

  const uniqueStrings = Guitars.map((guitar) => guitar.strings).filter(
    (strings, index, self) => self.indexOf(strings) === index,
  );

  
  return (
    <div className="w-full h-auto ">
      <h1 className="font-[Open Sans] font-bold text-2xl leading-[100%] tracking-normal">
        Фильтр
      </h1>
      <div className="my-6">
        <Line18 />
      </div>

      {/**СОРТИРОВКА ПО ЦЕНЕ */}
      <div className="flex flex-col w-full">
        <SortPrice guitar={guitar} />
      </div>
      <div className="my-6">
        <Line18 />
      </div>

      {/**СОРТИРОВКА ПО ТИПУ ГИТАР */}
      <div className="box-border">
        <h2 className="font-[Open Sans] font-bold text-2xl leading-[100%] tracking-normal">
          Тип гитар
        </h2>
        <form className="flex flex-col w-full mt-4 ">
          {uniqueTypes.map((type) => (
            <label className="inline-flex items-center" key={type}>
              <input
                className=" size-[25px] mr-4 my-1 border-solid border-neutral-300 outline-none "
                type="checkbox"
                value=""
                onClick={() => {
                  setSortBy("type");
                }}
              />
              <span className="font-[Open Sans] font-normal text-xl leading-[100%] tracking-normal">
                {type}
              </span>
            </label>
          ))}
        </form>
      </div>
      <div className="my-6">
        <Line18 />
      </div>

      {/**СОРТИРОВКА ПО КОЛИЧЕСТВУ СТРУН */}
      <div className="box-border">
        <h2 className="font-[Open Sans] font-bold text-2xl leading-[100%] tracking-normal">
          Количество струн
        </h2>
        <form className="flex flex-col w-full mt-4">
          {uniqueStrings.map((strings) => (
            <label className="inline-flex items-center " key={strings}>
              <input
                className=" size-[25px] mr-4 my-1 border-solid border-neutral-300 outline-none "
                type="checkbox"
                value=""
              />
              <span className="font-[Open Sans] font-normal text-xl leading-[100%] tracking-normal">
                {strings}
              </span>
            </label>
          ))}
        </form>
      </div>
      <div className="my-6">
        <Line18 />
      </div>
    </div>
  );
};

export default CheckBox;
