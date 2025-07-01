import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import { useAppStore } from '../../store/AppStore'
import Cards from '../../components/Cards'
import SideBox from '../../components/SideBox'




export const Home = () => {
  const sortBy = useAppStore((state) => state.sortBy)
  const setSortBy = useAppStore((state) => state.setSortBy)

  return (
    <>
      <div className='mt-20'>
      <a className='px-5 py-2 bg-amber-600' href="#" onClick={() => {
        setSortBy('price')
      }}>Button sort by price</a>
      <a className='px-5 py-2 bg-amber-600' href="#" onClick={() => {
        setSortBy('name')
        }}>Button sort by name</a>
      </div>
      <Breadcrumb />
      <div className='flex flex-row'>
        <div className='basis-1/4'>
          <SideBox />
        </div>
        <div className='basis-3/4'>
          <Cards />
        </div>
      </div>
      
    </>  
  )
}

