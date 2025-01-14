import React from 'react'
import ConnetCard from '../sctionContent/ConnetCard'

const Connect = () => {
  return (
    <div className='h-fit mb-44 p-7 relative max-sm:p-5 top-32 z-10'>
       
      <div>
        <h1 className='text-4xl text-center capitalize mb-5 max-sm:text-3xl text-yellow-700 font-bold'>connect with us</h1>
        <p className='text-center w-4/5 m-auto '>Have questions or need personalized assistance? Connect with us today! Click the link below to chat with us on WhatsApp and book a consultation—we’re here to help you succeed.</p>
        <div className='connectGrid relative z-40  gap-16 grid  sm:grid-cols-1 justify-center  mt-11'>
           <ConnetCard />
        </div>
      </div>
    </div>
  )
}

export default Connect
