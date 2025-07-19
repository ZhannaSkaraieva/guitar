import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Pagination from "./components/Pagination";
import CheckBox from "./components/CheckBox";
import CardList from "./components/CardList";
import { Guitar } from "../../Data";

interface GuitarProps {
  guitar: Guitar;
}

const Catalog: React.FC<GuitarProps> = ({ guitar }) => {
  return (
    <>
      <Breadcrumb />
      <div className="w-full flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4 max-sm:px-4 max-sm:mb-4">
          <CheckBox guitar={guitar} />
        </div>
        <div className="w-full md:w-3/4 ">
          <CardList />
        </div>
      </div>
      <div className="flex justify-end">
        <Pagination />
      </div>
    </>
  );
};

export default Catalog;
