import { BrowserRouter, Router } from 'react-router-dom'
import AppRoutes from './route/Routes'
import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Rectangle from './assets/Rectangle'
import GuitarFooter from './components/GuitarFooter'

function App() { 
  return (
      <div className="  container mx-auto max-w-[1020px] min-h-screen  flex flex-col">
        <Header />                     {/* Хедер сверху */}
        <main className="flex-grow">
          <AppRoutes />               {/* Сюда подставляются страницы */}
      </main>
        <GuitarFooter /> {/* Гитара внизу */}
        <Rectangle/>                {/* Прямоугольник между хедером и футером */}
        <Footer />                     {/* Футер всегда снизу */}
      </div>
  )
}
export default App
