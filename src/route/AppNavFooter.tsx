import React from "react";
import { NavLink } from "react-router-dom";

const navItemsFooter = [
  { to: "/wherebuy", label: "Где купить?" },
  { to: "/blog", label: "Блог" },
  { to: "/faq", label: "Вопрос - ответ" },
  { to: "/return", label: "Возврат" },
  { to: "/servicecenter", label: "Сервис-центры" },
];

const AppNavFooter = () => {
  return (
    <nav className=" h-[10px] font-[Open Sans]  font-normal text-[10px] leading-[20px]">
      {navItemsFooter.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end
          className=" flex items-start justify-start whitespace-nowrap"
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default AppNavFooter;
