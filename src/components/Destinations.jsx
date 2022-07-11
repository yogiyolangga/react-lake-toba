import React from 'react'
import pic1 from '../assets/13.jpg'
import pic2 from '../assets/12.jpg'
import pic3 from '../assets/11.jpg'
import pic4 from '../assets/14.jpg'
import pic5 from '../assets/15.jpg'



export const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4'>
        <h1>Menuju Tujuan</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <div className='grid grid-rows-none gap-2 py-4 md:grid-cols-5 md:first-letter:gap-4'>
            <div className='col-span-2 row-span-2 overflow-hidden rounded-lg shadow-xl shadow-slate-500 group md:col-span-3'>
                <img className='object-cover w-full h-full duration-300 group-hover:scale-125 group-hover:cursor-zoom-in' src={pic1} alt="pic1" />
            </div>
            <div className='overflow-hidden rounded-lg shadow-xl shadow-slate-500 group'>
                <img className='object-cover w-full h-full duration-300 group-hover:scale-125 group-hover:cursor-zoom-in' src={pic2} alt="pic2" />
            </div>
            <div className='overflow-hidden rounded-lg shadow-xl shadow-slate-500 group'>
                <img className='object-cover w-full h-full duration-300 group-hover:scale-125 group-hover:cursor-zoom-in' src={pic3} alt="pic3" />
            </div>
            <div className='overflow-hidden rounded-lg shadow-xl shadow-slate-500 group'>
                <img className='object-cover w-full h-full duration-300 group-hover:scale-125 group-hover:cursor-zoom-in' src={pic4} alt="pic4" />
            </div>
            <div className='overflow-hidden rounded-lg shadow-xl shadow-slate-500 group'>
                <img className='object-cover w-full h-full duration-300 group-hover:scale-125 group-hover:cursor-zoom-in' src={pic5} alt="pic5" />
            </div>
        </div>
    </div>
  )
}
