import React from "react";

interface IconArrowDownProps {
  color?: string; // цвет стрелки
}

export const IconArrowDown: React.FC<IconArrowDownProps> = ({color = "#585757"}) => {
  return (
    <>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.3968 6.06061L5.50782 6.06061L11.9523 17.5189L18.3968 6.06061Z"
          fill={color} // используем пропс
        />
      </svg>
    </>
  );
};
//fill="#585757"
//fill="#131212"