import React from "react";

import Cards from "../../components/Cards";
import CheckBox from "../../components/CheckBox";

const Catalog = () => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/4">
        <CheckBox />
      </div>
      <div className="basis-3/4">
        <Cards />
      </div>
    </div>
  );
};

export default Catalog;
