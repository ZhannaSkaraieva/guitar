import React from "react";
import Guitars from "../../../Data";
import Card from "./Card";
import { Guitar } from "../../../Data";
import { useAppStore } from "../../../store/AppStore";

const CardList = () => {

  const minPrice = useAppStore((state) => state.minPrice);
  const maxPrice = useAppStore((state) => state.maxPrice);

  const min = minPrice === '' ? 0 : Number(minPrice);
  const max = maxPrice === '' ? Infinity : Number(maxPrice);
    
  const filterPrice = Guitars.filter(
    (guitar) => (Number(min) <= guitar.price && guitar.price <= Number(max)),
  ); 


  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
      {filterPrice.map((guitar: Guitar) => (
        <Card key={guitar.id} guitar={guitar} />
      ))}
    </div>
  );
};

export default CardList;
