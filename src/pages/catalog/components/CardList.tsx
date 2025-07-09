import React from 'react'
import Guitars from '../../../Data'
import Card from './Card'
import { Guitar } from '../../../Data'

const CardList = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 ">
        {Guitars.map((guitar: Guitar) => (
          <Card key={guitar.id} guitar={guitar}/>
        ))}
    </div>
  )
}

export default CardList