import React from 'react'
import pic1 from '../assets/12.jpg'
import pic2 from '../assets/7.jpg'
import pic3 from '../assets/8.jpg'
import pic4 from '../assets/9.jpg'
import pic5 from '../assets/10.jpg'
import pic6 from '../assets/11.jpg'
import { SelectsCard } from './SelectsCard'

export const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2'>
        <SelectsCard bg={pic1} text='Paropo' />
        <SelectsCard bg={pic2} text='Tongging' />
        <SelectsCard bg={pic3} text='Sipiso-piso' />
        <SelectsCard bg={pic4} text='Silalahi' />
        <SelectsCard bg={pic5} text='Paropo' />
        <SelectsCard bg={pic6} text='Tongging' />
    </div>
  )
}
