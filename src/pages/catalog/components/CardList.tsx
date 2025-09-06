import React, { useEffect } from "react";
import Guitars from "../../../Data";
import Card from "./Card";
import { Guitar } from "../../../Data";
import { useAppStore } from "../../../store/AppStore";
import { SortString } from "./SortString";
import Pagination from "./Pagination";
import { useProductPageStore } from "../../../store/ProductPageStore";

const CardList = () => {
  const minPrice = useAppStore((state) => state.minPrice);
  const maxPrice = useAppStore((state) => state.maxPrice);

  const SortByTypes = useAppStore((state) => state.sortByTypes);
  const SortByStrings = useAppStore((state) => state.sortByStrings);

  const sortBy = useAppStore((state) => state.sortBy); // price | rating | null
  const sortOrder = useAppStore((state) => state.sortOrder); // asc | desc

  const currentPage = useAppStore((state) => state.curentPage);
  const setCurrentPage = useAppStore((state) => state.setCurrentPage);

  const inputValue = useAppStore((state) => state.inputValue);

  const reviews = useProductPageStore((state) => state.reviews);

  useEffect(() => {
    setCurrentPage(1);
  }, [minPrice, maxPrice, SortByTypes, SortByStrings, inputValue]);

  const cardsPerPage = 12;
  const indexOfLastCards = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCards - cardsPerPage;

  const filteredGuitars = Guitars.filter((guitar) => {
    const SortPrice = minPrice <= guitar.price && guitar.price <= maxPrice;
    const SortType =
      SortByTypes.length === 0 || SortByTypes.includes(guitar.type);
    const SortString =
      SortByStrings.length === 0 || SortByStrings.includes(guitar.strings);
    const inputGuitars =
      inputValue.trim() === "" ||
      guitar.title.toLowerCase().includes(inputValue.toLowerCase()) ||
      guitar.type.toLowerCase().includes(inputValue.toLowerCase());

    return SortPrice && SortType && SortString && inputGuitars;
  });

  // фильтруем и добавляем средний рейтинг к каждому гитарному объекту
  const guitarsWithAvgRating = filteredGuitars.map((g) => {
    const guitarReviews = reviews.filter((r) => r.productId === g.id);
    const totalRating = guitarReviews.reduce((sum, r) => sum + r.rating, 0);
    const averageRating =
      guitarReviews.length > 0 ? totalRating / guitarReviews.length : 0;

    return {
      ...g,
      averageRating,
    };
  });

  // сортировка по цене или рейтингу
  const sortedGuitars = [...guitarsWithAvgRating].sort((a, b) => {
    const key = sortBy === "rating" ? "averageRating" : "price";
    if (sortOrder === "asc") return a[key] - b[key];
    return b[key] - a[key];
  });

  // пагинация
  const currentCards = sortedGuitars.slice(indexOfFirstCard, indexOfLastCards);

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentCards.map((guitar: Guitar) => (
          <Card key={guitar.id} guitar={guitar} />
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <Pagination
          cardsPerPage={cardsPerPage}
          totalCards={filteredGuitars.length}
        />
      </div>
    </>
  );
};

export default CardList;
