import React from "react";
import StarIcon from "./StarIcon";
import VectorIcon from "./VectorIcon";

const Reviews = () => {
  return (
    <>
      <ul className="flex justify-start items-center gap-1">
        <li>
          <StarIcon />
        </li>
        <li>
          <StarIcon />
        </li>
        <li>
          <StarIcon />
        </li>
        <li>
          <StarIcon />
        </li>
        <li>
          <VectorIcon />
        </li>
      </ul>
    </>
  );
};

export default Reviews;
