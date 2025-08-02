import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import CheckBox from "./components/CheckBox";
import CardList from "./components/CardList";
import { Guitar } from "../../Data";
import Sort from "./components/Sort";

interface GuitarProps {
  guitar: Guitar[];
}

interface PaginationProps {
  cardsPerPage: number;
  filteredGuitars: Guitar[];
}

const Catalog: React.FC<GuitarProps> = ({ guitar }) => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4 max-sm:px-4 max-sm:mb-4">
          <CheckBox guitar={guitar} />
        </div>
        <div className="w-full md:w-3/4 ">
          <Sort guitar={guitar} />
          <CardList />
        </div>
      </div>
    </>
  );
};

export default Catalog;
