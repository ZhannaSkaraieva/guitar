import React, { useState } from "react";
import StarIcon from "../../../assets/StarIcon";

const RatingStar = () => {
  const [rating, setRating] = useState(null);
  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <>
            <label className="">
              <input type="radio" />
              <StarIcon />
            </label>
          </>
        );
      })}
    </>
  );
};

export default RatingStar;
