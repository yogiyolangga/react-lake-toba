import React from 'react'

export const SelectsCard = (props) => {
  return (
        <div className='relative overflow-hidden rounded-md shadow-lg cursor-cell h-60 group shadow-slate-500'>
            <img src={props.bg} alt="" className='object-cover w-full h-full duration-300 blur-sm group-hover:blur-none group-hover:scale-105'/>
            <p className='absolute text-2xl font-bold text-center text-white duration-500 -translate-x-1/2 translate-y-1/2 bottom-1/2 left-1/2 group-hover:scale-0'>{props.text}</p>
        </div>
  )
}
