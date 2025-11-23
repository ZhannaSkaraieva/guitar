import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import { Home } from "../pages/home/Home";
import About from "../pages/about/About";
import Wherebuy from "../pages/wherebuy/Wherebuy";
import Catalog from "../pages/catalog/Catalog";
import Guitars, { Guitar } from "../Data";
import { ProductPage } from "../pages/productpage/ProductPage";
import Basket from "../pages/basket/Basket";
import Layout from "../components/Layout";
import Faq from "../pages/Faq";
import Return from "../pages/Return";
import Servicecenter from "../pages/Servicecenter";
import Pagenotfound from "../pages/Pagenotfound";
import Blog from "../pages/Blog";
import Login from "../pages/login/Login";

interface RouterArrProps {
  guitars: Guitar[];
  guitar: Guitar;
}

const routeArr = [
  { path: "/", element: <Home /> },
  {
    path: "catalog",
    title: "каталог",
    label: "Каталог",
    element: <Catalog guitar={Guitars} />,
  },
  {
    path: "catalog/:id",
    title: "Главная",
    element: <ProductPage guitars={Guitars} />,
  },
  { path: "about", element: <About /> },
  { path: "wherebuy", element: <Wherebuy /> },
  { path: "basket", element: <Basket /> },
  { path: "login", element: <Login /> },
  { path: "blog", element: <Blog /> },
  { path: "faq", element: <Faq /> },
  { path: "return", element: <Return /> },
  { path: "servicecenter", element: <Servicecenter /> },
  { path: "*", element: <Pagenotfound /> },
];

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
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
        {routeArr.map(({ path, element, title }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}
