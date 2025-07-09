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
    <nav className=" h-min  font-[Open Sans] max-sm:items-center md:whitespace-break-spaces font-normal text-[0.63rem] xl:text-sm leading-[1.25rem] flex flex-col max-sm:flex-row max-sm:gap-4">
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
