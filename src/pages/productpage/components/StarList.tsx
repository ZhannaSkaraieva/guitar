import React from "react";
import { Star } from "lucide-react";
import { useStarStore } from "../../../store/StarStore";

interface StarListProps {
  currentRating?: number; // Если передаётся — отобразим этот рейтинг
}
const StarList: React.FC<StarListProps> = ({ currentRating = 0 }) => {
  const maxValue = useStarStore((state) => state.maxValue);
  return (
    <>
      <div className=" flex">
        {[...Array(maxValue)].map((star, index) => {
          const starsInOrder = index + 1;
          return (
            <Star
              height={20}
              width={20}
              key={starsInOrder} //Для каждой звезды выводится компонент Star с порядковым номером key={starsInOrder}.
              className={`cursor-pointer stroke-[#C90606] ${
                starsInOrder <= currentRating ? "fill-[#C90606]" : "fill-none" // звезды закрашиваются если актуальный рейтинг<= порядковому номеру
              }`}
            />
          );
        })}
      </div>
    </>
  );
};

export default StarList;
