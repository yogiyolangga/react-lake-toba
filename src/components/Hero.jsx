import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import tobaVid from '../assets/video2.mp4'

export const Hero = () => {
  return (
    <div className='relative w-full h-screen'>
        <video className='object-cover w-full h-full' src={tobaVid} autoPlay loop muted />
        <div className='absolute top-0 left-0 w-full h-full'></div>
        <div className='absolute top-0 flex flex-col justify-center w-full h-full p-4 text-center text-white'>
            <h1>Jalan-jalan dulu yuk ?</h1>
            <form action="/" className='flex justify-between w-full items-center max-w-[700px] mx-auto border p-1 rounded-md text-black bg-gray-100/90'>
                <div>
                    <input className='bg-transparent w-[200px] sm:w-[400px] md:w-[600px] font-[Arima] focus:outline-none' type="text" placeholder='Mau jalan jalan kemana ?' />
                </div>
                <div>
                    <button><AiOutlineSearch size={20} className='icon' style={{ color: '#ffffff' }} /></button>
                </div>
            </form>
        </div>
    </div>
  )
}
