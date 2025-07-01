import React from 'react'
import AppRoutes from '../route/Routes'

const Main = () => {
  return (
      <div className="flex-grow">
          <AppRoutes />               {/* Сюда подставляются страницы */}
      </div>
  )
}

export default Main