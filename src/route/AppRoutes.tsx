import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import About from "../pages/about/About";
import Wherebuy from "../pages/wherebuy/Wherebuy";
import Catalog from "../pages/catalog/Catalog";
import Guitars, { Guitar } from "../Data";
import { ProductPage } from "../pages/productpage/ProductPage";
import Basket from "../pages/basket/Basket";
import Layout from "../components/Layout";

const routeArr = [
  { path: "/", element: <Home /> },
  { path: "catalog", element: <Catalog guitar={Guitars} /> },
  { path: "catalog/:guitarId", element: <ProductPage /> },
  { path: "about", element: <About /> },
  { path: "wherebuy", element: <Wherebuy /> },
  { path: "basket", element: <Basket /> },
];

export default function AppRoutes() {
  return (
    <Routes>
      {/**ОТОБРАЖЕНИЕ ГИТАР НА ЗАДНЕМ ФОНЕ
       *
       *
       * !!!!!!ОБЩАЯ ОБЕРТКА!!!!!
       *
       *
       */}
      <Route element={<Layout />}>
        {/* ГЛАВНАЯ СТРАНИЦА */}
        <Route index element={<Home />} />

        {/* МАРШРУТЫ */}
        {routeArr.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}
