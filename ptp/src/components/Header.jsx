import React, { useEffect, useRef } from 'react'
import image from '../assets/aa.jpeg'
import ConsultBtn from './buttons/ConsultBtn'


const Header = () => {

  const boxRef = useRef(null);
  


  return (
    <div  className='relative height w-full'>
     <div>
      <img className='absolute left-0 right-0 w-full h-full object-cover' src={image} alt="" />
      <div className='bg-black absolute h-full w-full opacity-50 '></div>
      <div className="text relative z-30 flex flex-col gap-9 top-44 items-center justify-center capitalize text-white max-sm:top-32 max-sm:gap-2 ">  
      <h1 className='text-6xl text-white text-center w-7/12 max-sm:text-3xl max-sm:w-full'>Smart agency for your <span className='font-thin '>
      <i>business to succeed</i></span>
      </h1>
      <p className='px-64 text-center max-sm:px-10 max-sm:pt-5'><span className='font-bold'>Push to Profit</span> helps businesses thrive with expert advice and proven strategies to boost growth, streamline operations, and increase profits. Let’s turn your vision into success.</p>
       <ConsultBtn />
      </div>
     </div>
    </div>
  )
}

export default Header
