import React from 'react'
import image from '../../assets/aa.jpeg'


const ContactHeader = () => {




  return (
    <div  className='relative h-80 w-full'>
        <div>
         <img className='absolute left-0 right-0 w-full h-full object-cover' src={image} alt="" />
         <div className='bg-black absolute h-full w-full opacity-50 '></div>
    
         <div className="text relative z-30 flex flex-col gap-9 top-44 items-center justify-center capitalize text-white max-sm:top-28">  
         <h1 className='text-7xl text-white text-center w-7/12'>Contact Us</h1>
         </div>
        </div>
       </div>
  )
}

export default ContactHeader
