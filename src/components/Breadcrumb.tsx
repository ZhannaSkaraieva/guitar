import React, { use } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import ArrowRightIcon from "../assets/ArrowRightIcon";

interface BreadcrumbProps {
  id: string;
  path: string;
  title: string;
  url: string;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <nav className="max-sm:hidden my-15">
      <ul className="flex flex-row gap-2 text-black text-sm md:text-lg lg:text-xl xl:text-2xl font-[Open Sans] font-normal not-italic leading-none text-center">
        <li>
          <Link to="/" className=" ">
            Главная
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={to} className="flex flex-row items-center gap-2">
              <ArrowRightIcon />
              <Link to={to}>{value}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
