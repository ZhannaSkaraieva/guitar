import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import About from '../pages/about/About';
import Wherebuy from '../pages/wherebuy/Wherebuy';
import Cart from '../pages/cart/Cart';

export default function AppRoutes() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/:guitarId' element={<Home />} /> {/** : -  «динамический сегмент» */}
            <Route path="about" element={<About />} />
            <Route path="wherebuy" element={<Wherebuy />} />
            <Route path="cart" element={<Cart />} />
        </Routes>
    );
}

