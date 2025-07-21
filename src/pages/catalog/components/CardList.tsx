import React from "react";
import Guitars from "../../../Data";
import Card from "./Card";
import { Guitar } from "../../../Data";
import { useAppStore } from "../../../store/AppStore";
import { SortString } from "./SortString";

const CardList = () => {
  const minPrice = useAppStore((state) => state.minPrice);
  const maxPrice = useAppStore((state) => state.maxPrice);

  const SortByTypes = useAppStore((state) => state.sortByTypes);
  const SortByStrings = useAppStore((state) => state.sortByStrings);

  const filterGuitars = Guitars.filter((guitar) => {
    const SortPrice =
      Number(minPrice) <= guitar.price && guitar.price <= Number(maxPrice);
    const SortType =
      SortByTypes.length === 0 || SortByTypes.includes(guitar.type);
    const SortString =
      SortByStrings.length === 0 || SortByStrings.includes(guitar.strings);
    return SortPrice && SortType && SortString;
  });

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filterGuitars.map((guitar: Guitar) => (
        <Card key={guitar.id} guitar={guitar} />
      ))}
    </div>
  );
};

export default CardList;
