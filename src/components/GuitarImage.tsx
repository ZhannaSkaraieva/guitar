import React from "react";
import { Outlet } from "react-router";
import Breadcrumb from "./Breadcrumb";

const GuitarImage = () => {
  return (
    <div className=" relative w-full h-dvh overflow-hidden">
      <div
        className="  absolute w-full h-full  bg-[url(/assets/Image-Back.png)]  bg-no-repeat bg-contain pointer-events-none"
        style={{
          backgroundPosition: "left 0 top -15%",
          zIndex: 0,
        }}
      />
      <div
        className="  absolute w-full h-full  bg-[url(/assets/Footerimg.png)] bg-no-repeat bg-contain pointer-events-none"
        style={{
          backgroundPosition: "left 0 bottom -105%",
          zIndex: 0,
        }}
      />
      <div className="relative z-10 px-6 pt-80">
        <Breadcrumb />
      </div>
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default GuitarImage;
