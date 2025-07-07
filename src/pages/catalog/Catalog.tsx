import React from "react";

import Cards from "../../components/Cards";
import CheckBox from "../../components/CheckBox";
import Breadcrumb from "../../components/Breadcrumb";
import Pagination from "./components/Pagination";

const Catalog = () => {
  return (
    <>
      <Breadcrumb />
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 max-sm:px-4 max-sm:mb-4">
          <CheckBox />
        </div>
        <div className="w-full md:w-3/4 ">
          <Cards />
        </div>
      </div>
      <div className="flex justify-end">
        <Pagination />
      </div>
    </>
  );
};

export default Catalog;
