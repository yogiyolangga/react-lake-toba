import React, {useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaInstagram, FaPinterest, FaYoutube} from 'react-icons/fa'

    export const Navbar = () => {
        const [nav, setNav] = useState(false);
        const [logo, setLogo] = useState(false)
        const handleNav = () => {
            setNav(!nav)
            setLogo(!logo)
        };

  return (
    <div className='absolute z-10 flex items-center justify-between w-full h-20 px-4 text-white'>
        <div>
        <h1 onClick={handleNav} className={logo? 'hidden md:block' : 'block text-black md:text-white'}>DANAU TOBA.</h1>
        </div>
        <ul className='hidden text-black md:flex'>
            <li>Home</li>
            <li>Travel</li>
            <li>Photo</li>
            <li>View</li>
        </ul>
        <div className='hidden md:flex'>
            <BiSearch className='mr-2 text-black' size={20}/>
            <BsPerson className='text-black size={20}'/>
        </div>

        {/* Hamburger */}
        <div onClick={handleNav} className='z-10 text-black cursor-pointer md:hidden'>
            {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} /> }
        </div>
        {/* Nav Menu Mobile dropdonw */}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full md:hidden bg-gray-100/90 duration-300 px-4 py-7 flex flex-col' : 'duration-300 w-9/12 absolute top-[-650%]'}>
            <ul>
            <h1>DANAU TOBA.</h1>
            <li className='border-b'>Home</li>
            <li className='border-b'>Travel</li>
            <li className='border-b'>Photo</li>
            <li className='border-b'>View</li>
            <div className='flex flex-col'>
                <button className='my-6'>Search</button>
                <button>Account</button>
            </div>
            <div className='flex justify-between my-6'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon'/>
                <FaYoutube className='icon'/>
                <FaPinterest className='icon'/>
            </div>
            </ul>
        </div>
    </div>
  )
}
