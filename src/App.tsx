import { BrowserRouter, Router } from "react-router-dom";
import AppRoutes from "./route/AppRoutes";
import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Rectangle from "./assets/Rectangle";
import Context from "./features/ContextProvider";

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}
export default App;
