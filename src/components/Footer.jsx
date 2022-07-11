import React from 'react'
import {FaFacebook, FaInstagram, FaPinterest, FaYoutube} from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='w-full py-16 bg-slate-300'>
        <div className='max-w-[1240px] mx-auto flex justify-between flex-col px-4 md:flex-row'>
                <h1 className='pb-4 font-bold text-center'>DANAU TOBA.</h1>
            <div className='flex justify-between w-full md:max-w-[280px]'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon'/>
                <FaYoutube className='icon'/>
                <FaPinterest className='icon'/>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto flex justify-between pt-6 md:pt-0'>
            <ul className='font-bold lg:flex '>
                <li>About</li>
                <li>Partnership</li>
                <li>Careers</li>
                <li>Newsroom</li>
            </ul>
            <ul className='font-bold lg:flex'>
                <li>Home</li>
                <li>Travel</li>
                <li>View</li>
                <li>Photo</li>
            </ul>
        </div>
    </div>
  )
}
