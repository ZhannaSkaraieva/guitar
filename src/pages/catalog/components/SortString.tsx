import React from "react";
import Guitars, { Guitar } from "../../../Data";
import { useAppStore } from "../../../store/AppStore";

interface GuitarProps {
  guitar: Guitar;
}

export const SortString = () => {
  const uniqueStrings = Guitars.map((guitar) => guitar.strings).filter(
    (strings, index, self) => self.indexOf(strings) === index,
  );

  const sortByStrings = useAppStore((state) => state.sortByStrings);
  const setSortByStrings = useAppStore((state) => state.setSortByStrings);

  return (
    <>
      <h2 className="font-[Open Sans] font-bold text-2xl leading-[100%] tracking-normal">
        Количество струн
      </h2>
      <form className="flex flex-col w-full mt-4">
        {uniqueStrings.map((strings) => (
          <label className="inline-flex items-center " key={strings}>
            <input
              className=" size-[25px] mr-4 my-1 border-solid border-neutral-300 outline-none "
              type="checkbox"
              value={strings}
              /*checked={sortByStrings.includes(strings)}*/
              onChange={() => setSortByStrings(strings)}
            />
            <span className="font-[Open Sans] font-normal text-xl leading-[100%] tracking-normal">
              {strings}
            </span>
          </label>
        ))}
      </form>
    </>
  );
};
