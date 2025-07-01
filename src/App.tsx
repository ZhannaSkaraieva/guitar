import { BrowserRouter, Router } from 'react-router-dom'
import AppRoutes from './route/Routes'
import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Rectangle from './assets/Rectangle'
import Main from './main/Main'

function App() { 
  return (
      <div className=" mx-auto w-full max-w-[1020px] lg:max-w-full min-h-screen flex flex-col overflow-x-hidden">
        <Header />                   
        <Main/>
        <Footer />                   
      </div>
  )
}
export default App
