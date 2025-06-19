import { BrowserRouter, Router } from 'react-router-dom'
import AppRoutes from './app/AppRoutes'
import React from 'react'
import Header from './components/widgets/header/Header'
import Footer from './components/widgets/footer/Footer'

function App() { 
  return (
      <div className="min-h-screen  flex flex-col">
        <Header />                     {/* Хедер сверху */}
        <main className="flex-grow">
          <AppRoutes />               {/* Сюда подставляются страницы */}
        </main>
        <Footer />                     {/* Футер всегда снизу */}
      </div>
  )
}
export default App
