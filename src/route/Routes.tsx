import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import About from '../pages/about/About';
import Wherebuy from '../pages/wherebuy/Wherebuy';
import Cart from '../pages/cart/Cart';
import Catalog from '../pages/catalog/Catalog';

const routeArr = [
    { path: '/', element: <Home /> },
    { path: 'catalog', element: <Catalog /> },
    { path: 'catalog/:guitarId', element: <Catalog /> },
    { path: 'about', element: <About /> },
    { path: 'wherebuy', element: <Wherebuy /> },
    { path: 'cart', element: <Cart /> },
  ];

export default function AppRoutes() {
    return (
        <Routes>
            <Route index element={<Home />} />
      
      {/* МАРШРУТЫ */}
            {routeArr.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    );
}

