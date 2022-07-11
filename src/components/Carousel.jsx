import { useState } from "react";
import React from 'react';
import {BsArrowLeftSquareFill, BsArrowRightSquareFill} from 'react-icons/bs'
import pic1 from '../assets/13.jpg'
import pic2 from '../assets/14.jpg'
import pic3 from '../assets/15.jpg'

const sliderData = [
    {
        url: pic1
    },
    {
        url: pic2
    },
    {
        url: pic3
    }
]

export const Carousel = () => {
    const [slide, setSlide] = useState(0)
    const length = sliderData.length

    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1)
    }
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1)
    }
  return (
    <div className='my-16 rounded-xl max-w-[1240px] h-[400px] overflow-hidden  mx-auto px-4 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill onClick={prevSlide} className="absolute top-[50%] text-3xl text-white cursor-pointer left-8" />
        <BsArrowRightSquareFill onClick={nextSlide} className="absolute top-[50%] text-3xl text-white cursor-pointer right-8" />
        {sliderData.map((item, index) => (
        <div className={index === slide ? 'w-full  shadow-lg shadow-slate-300 opacity-100 duration-300' : 'opacity-0 duration-300'}>
            {index === slide && (<img className='w-full' src={item.url} alt="/" />)}
        </div>    
        ))}
    </div>
  );
};
