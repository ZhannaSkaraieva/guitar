import { BrowserRouter, Router } from "react-router-dom";
import AppRoutes from "./route/AppRoutes";
import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Rectangle from "./assets/Rectangle";

function App() {
  return (
    <>
      {/**<div className="w-full min-h-screen flex flex-col ">
      <Header />
      <main className="flex-grow">*/}
      <AppRoutes />
      {/**</main>
      <Footer />
    </div>*/}
    </>
  );
}
export default App;
