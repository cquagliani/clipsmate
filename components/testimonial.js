import React from 'react'
import Image from "next/image";
import { Divider } from '@mui/material';
import stars from '../public/stars.svg'

function Testimonial({img, name, title, text}) {
  return (
    <div className="flex flex-col items-center justify-start shadow-xl bg-gray rounded-3xl h-[400px] w-[400px] p-8 mt-20 md:mt-12">
        <div className="rounded-full h-[100px] w-[100px] -mt-20 overflow-hidden shadow-lg relative">
            <Image className="" object-fit="cover"  src={img}/>
        </div>
        <div className="flex flex-col items-center gap-4 my-10">
            <h3 className="font-bold text-2xl">{name}</h3>
            <h4 className="font-light text-md -mt-2">{title}</h4>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
            <Divider sx={{width:'90%', borderBottomWidth: '2px'}} />
            <Image className="mt-4" src={stars} alt="stars rating" />
        </div>
        <div className="mt-8">
            <p className="font-normal italic text-center text-lg">"{text}"</p>
        </div>
    </div>
  )
}

export default Testimonial