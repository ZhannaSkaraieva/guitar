import React from "react";
import { Outlet } from "react-router";
import Breadcrumb from "./Breadcrumb";

const GuitarBG = () => {
  return (
    <div
      className="h-min bg-no-repeat bg-local w-full "
      style={{
        backgroundImage:
          "url('/assets/Image-Back.png'), url('/assets/Footerimg.png')",
        backgroundPosition: "center top -1rem,center bottom -12rem",
        backgroundSize: "contain,contain",
      }}
    >
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default GuitarBG;
/*, url(/assets/Footerimg.png)*/
/*bg-[url('/assets/Image-Back.png'),url('/assets/Footerimg.png')] */
