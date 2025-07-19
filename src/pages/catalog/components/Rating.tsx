import React from "react";
import { Guitar } from "../../../Data";

interface GuitarProps {
  guitar: Guitar;
}

const Rating: React.FC<GuitarProps> = ({ guitar }) => {
  return (
    <>
      <div className="flex w-4 h-4 justify-center items-center mx-1">
        <p className="font-[Open Sans] font-normal non-italic text-xs/tight leading-none tracking-tighter  text-[#585757]">
          {guitar.rating}
        </p>
      </div>
    </>
  );
};

export default Rating;
