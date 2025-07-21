import React from "react";
import Guitars, { Guitar } from "../../../Data";
import { useAppStore } from "../../../store/AppStore";

interface GuitarProps {
  guitar: Guitar;
}

export const SortType = () => {
  const uniqueTypes = Guitars.map((guitar) => guitar.type).filter(
    (type, index, self) => self.indexOf(type) === index,
  );

  const sortByTypes = useAppStore((state) => state.sortByTypes);
  const setSortByTypes = useAppStore((state) => state.setSortByTypes);

  return (
    <>
      <h2 className="font-[Open Sans] font-bold text-2xl leading-[100%] tracking-normal">
        Тип гитар
      </h2>
      <form className="flex flex-col w-full mt-4 ">
        {uniqueTypes.map((type) => (
          <label className="  inline-flex items-center" key={type}>
            <input
              className="size-[25px] mr-4 my-1 border-solid border-neutral-300 outline-none "
              type="checkbox"
              value={type}
              /*checked={sortByTypes.includes(type)}*/
              onChange={() => setSortByTypes(type)}
            />
            <span className="font-[Open Sans] font-normal text-xl leading-[100%] tracking-normal">
              {type}
            </span>
          </label>
        ))}
      </form>
    </>
  );
};
