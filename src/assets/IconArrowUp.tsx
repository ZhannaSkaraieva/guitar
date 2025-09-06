import React from "react";

interface IconArrowUpProps {
  color?: string; // цвет стрелки
}

export const IconArrowUp: React.FC<IconArrowUpProps> = ({color = "#585757"}) => {
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
          d="M5.34741 17.803H18.2364L11.7919 6.34468L5.34741 17.803Z"
          fill={color} // используем пропс
        />
      </svg>
    </>
  );
};

export default IconArrowUp;
