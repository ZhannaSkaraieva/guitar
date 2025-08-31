import React, { useState } from "react";
import { Star } from "lucide-react";
import { useStarStore } from "../../../store/StarStore"
import { Guitar } from "../../../Data";
//import StarIcon from "../../../assets/StarIcon";

interface StarListProps {
  rating?: number; // Если передаётся — отобразим этот рейтинг
}

const StarList: React.FC<StarListProps> = ({ rating}) => {
  const currentRating = useStarStore((state) => state.currentRating);
  const setCurrentRating = useStarStore((state) => state.setCurrentRating);

  const maxValue = useStarStore((state) => state.maxValue);
  const setMaxValue = useStarStore((state) => state.setMaxValue);

  const readOnly = useStarStore((state) => state.readOnly);
  const setReadOnly = useStarStore((state) => state.setReadOnly);


  return (
    <>
      <div className=" flex">
        {[...Array(maxValue)].map((star, index) => {
          const ratingValue = index + 1;

          return (
            <Star
              height={20}
              width={20}
              onClick={() => {
                if (!readOnly) {
                  setCurrentRating(ratingValue)
                }
              } 
        }
              key={ratingValue}
              className={`cursor-pointer stroke-[#C90606] ${
                ratingValue <= currentRating ? "fill-[#C90606]" : "fill-none"
              }`}
            />
          );
        })}
      </div>
    </>
  );
};

export default StarList;
