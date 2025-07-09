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
        backgroundPosition: "center top -3rem, center bottom -17rem",
        backgroundSize: "contain, contain",
      }}
    >
      <div className=" py-36 md:py-72 lg:py-96 px-4 md:px-6 lg:px-12">
        <Outlet />
      </div>
    
    </div>
  );
};

export default GuitarBG;
/*, url(/assets/Footerimg.png)*/
/*bg-[url('/assets/Image-Back.png'),url('/assets/Footerimg.png')] */
/**bg-local */
