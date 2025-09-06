import React, { useState } from "react";
import StarListWrapper from "./StarListWrapper";
import StarList from "./StarList";
import { useStarStore } from "../../../store/StarStore";
interface ReviewItemProps {
  newReview: ReviewType;
}
interface ReviewType {
  createdAt: string;
  id: number;
  name: string;
  advantages: string;
  disadvantages: string;
  comment: string;
  rating: number;
  productId: number;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ newReview }) => {

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <p className="text-[#010101] font-[Open_Sans] text-sm font-semibold ">
          {newReview.name} {"    "}
          <span className="text-gray-400 text-xs mb-2">
            {newReview.createdAt}
          </span>
        </p>
      </div>
      <div className="flex flex-row my-2">
        <StarList currentRating={newReview.rating}/>
      </div>
      <p>
        <span className="text-[#010101] font-[Open_Sans] text-sm font-semibold">
          Достоинства:
        </span>
        <br></br>
        <span className="text-[#000000] font-[Open_Sans] text-xs font-normal">
          {newReview.advantages}
        </span>
      </p>
      <p>
        <span className="text-[#010101] font-[Open_Sans] text-sm font-semibold">
          Недостатки
        </span>
        :<br></br>
        <span className="text-[#000000] font-[Open_Sans] text-xs font-normal">
          {newReview.disadvantages}
        </span>
      </p>
      <p className=" mb-4">
        <span className="text-[#010101] font-[Open_Sans] text-sm font-semibold">
          Комментарий:
        </span>
        <br></br>
        <span className="text-[#000000] font-[Open_Sans] text-xs font-normal">
          {newReview.comment}
        </span>
      </p>
    </>
  );
};

export default ReviewItem;
