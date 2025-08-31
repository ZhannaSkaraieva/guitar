import React from "react";
import { useStarStore } from "../../../store/StarStore";

const StarRatingLabel = () => {
  const currentRating = useStarStore((state) => state.currentRating);
  const setCurrentRating = useStarStore((state) => state.setCurrentRating);

  const labelText = `${currentRating}`;
  return <div>{labelText}</div>;
};

export default StarRatingLabel;
