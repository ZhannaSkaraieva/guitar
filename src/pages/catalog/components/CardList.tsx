import React from "react";
import Guitars from "../../../Data";
import Card from "./Card";
import { Guitar } from "../../../Data";
import { useAppStore } from "../../../store/AppStore";
import { SortString } from "./SortString";
import Pagination from "./Pagination";

const CardList = () => {
  const minPrice = useAppStore((state) => state.minPrice);
  const maxPrice = useAppStore((state) => state.maxPrice);

  const SortByTypes = useAppStore((state) => state.sortByTypes);
  const SortByStrings = useAppStore((state) => state.sortByStrings);

  const SortBy = useAppStore((state) => state.sortBy);

  const currentPage = useAppStore((state) => state.curentPage);

  const cardsPerPage = 6;
  const indexOfLastCards = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCards - cardsPerPage;  
  
  let filteredGuitars = Guitars.filter((guitar) => {
    const SortPrice = minPrice <= guitar.price && guitar.price <= maxPrice;
    const SortType =
      SortByTypes.length === 0 || SortByTypes.includes(guitar.type);
    const SortString =
      SortByStrings.length === 0 || SortByStrings.includes(guitar.strings);

    
    return SortPrice && SortType && SortString;
  });

  switch (SortBy) {
  case "ArrowUp":
    filteredGuitars.sort((a, b) => a.price - b.price);
    break;
  case "ArrowDown":
    filteredGuitars.sort((a, b) => b.price - a.price);
    break;
  case "ArrowRating":
    filteredGuitars.sort((a, b) => b.rating - a.rating);
      break;
  case "ArrowPrice":
    filteredGuitars.sort((a, b) => a.price - b.price);
    break;
  default:
    filteredGuitars = Guitars; 
    break;
  }
  
  const currentCards = filteredGuitars.slice(indexOfFirstCard, indexOfLastCards);

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {currentCards.map((guitar: Guitar) => (
        <Card key={guitar.id} guitar={guitar} />
      ))}
      </div>
      <div className="flex justify-end">
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={filteredGuitars.length}
      /></div>
    </>
  );
};



export default CardList;
