import React from 'react'
import RegisterHeader from '../components/sections/RegisterHeader'
import notFound from '../assets/hii.png'

const NotFound = () => {
  return (
   <div>
    <RegisterHeader />

      <div className='h-96 mt-20 mb-20 justify-center w-full p-10 items-center flex text-gray-900'>
         <div className='flex flex-col w-full justify-center items-center'>
            <img className='w-64' src={notFound} alt="" />
            <h1 className='text-6xl max-sm:text-4xl'>Oops...Page Not Found</h1>
         </div>
      </div>
   </div>
  )
}

export default NotFound
