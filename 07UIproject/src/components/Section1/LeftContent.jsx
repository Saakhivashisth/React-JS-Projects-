import React from 'react'
import HeroElement from './HeroElement'
import Arrow from './Arrow'
const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
        <HeroElement />
        <Arrow />
    </div>
      
  )
}

export default LeftContent
