import React from "react";
import { Outlet } from "react-router";
import Breadcrumb from "./Breadcrumb";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div
        className="h-min bg-no-repeat bg-local w-full bg-custom-guitar" // bg-custom-hero в index.css
        // style={{
        //   backgroundImage:
        //     "url('/assets/Image-Back.png'), url('/assets/Footerimg.png')",
        //   backgroundPosition: "center top -3rem, center bottom -17rem",
        //   backgroundSize: "contain, contain",
        // }}
      >
        <main className=" py-36 md:py-40 lg:pt-66 lg:pb-45 xl:pt-[410px] xl:pb-[250px] 2xl:pt-[550px] 2xl:pb-[460px] px-4 md:px-6 lg:px-12 ">
          <Breadcrumb />
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
/*, url(/assets/Footerimg.png)*/
/*bg-[url('/assets/Image-Back.png'),url('/assets/Footerimg.png')] */
/**bg-local */
