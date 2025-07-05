import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { useAppStore } from "../../store/AppStore";

export const Home = () => {
  const sortBy = useAppStore((state) => state.sortBy);
  const setSortBy = useAppStore((state) => state.setSortBy);

  return (
    <>
      <div className="mt-20">
        <a
          className="px-5 py-2 bg-amber-600"
          href="#"
          onClick={() => {
            setSortBy("price");
          }}
        >
          Button sort by price
        </a>
        <a
          className="px-5 py-2 bg-amber-600"
          href="#"
          onClick={() => {
            setSortBy("name");
          }}
        >
          Button sort by name
        </a>
      </div>
    </>
  );
};
