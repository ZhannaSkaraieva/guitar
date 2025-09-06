import React from "react";
import { useStarStore } from "../../../store/StarStore";
import StarList from "./StarList";

const StarListWrapper = () => {
  const currentRating = useStarStore((state) => state.currentRating);
  const setCurrentRating = useStarStore((state) => state.setCurrentRating);

  const onClick = () => setCurrentRating(currentRating);
  return (
    <div>
      <StarList currentRating={currentRating} onChange={onClick} />
    </div>
  );
};

export default StarListWrapper;
