import React from 'react'
import useGsapScrollAnimation from '../../GsapHook';

const ContactDetials = () => {


  const ref = useGsapScrollAnimation({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1 },
    enter: { opacity: 1, y: 0, duration: 1 },
    leave: { opacity: 0, y: -50, duration: 1 },
  });

  return (
    <div ref={ref} className='w-1/2 py-5 px-10 flex-col flex gap-4 max-md:px-5 max-sm:w-full max-sm:px-5 '>
      {/* contact details intro text */}
      <h1 className='text-2xl font-semibold'>Contact Details</h1>
      <p>We’d love to hear from you! Whether you have questions, need support, or want to collaborate, our team is here to assist. Reach out via any of the contact options below, and we’ll get back to you as soon as possible</p>
      <div className='socials grid grid-cols-2 gap-5 max-md:grid-cols-1 max-lg:pl-5 max-sm:relative  max-sm:pl-0'>
          <div className='p-2 border-2 border-yellow-600 border-opacity-30 rounded-md flex gap-4  items-center'>
          <div className='bg-yellow-600 rounded-md p-2'>
          <i className="fas fa-clock text-white"></i>
          </div>
           <div className='flex flex-col'>
            <span className='text-md font-normal'>Availability</span>
            <span className=' font-normal text-xs '>9:00 to 8:00</span>
            </div>
          </div>
          <div className='p-2 border-2 border-yellow-600 border-opacity-30 rounded-md flex items-center gap-4 pr-10'>
           <div className='bg-yellow-600 rounded-md p-2'>
           <i className="fas fa-envelope text-white"></i>
           </div>
           <div className='flex flex-col'>
            <span className='text-md font-normal'>Email</span>
            <span className=' font-normal text-xs '><a href="">pushtoprofitcommunity@gmail.com</a></span>
            </div>
          </div>
          <div  className='p-2 border-2 border-yellow-600 border-opacity-30 rounded-md flex items-center gap-4'>
            <div className='bg-yellow-600 rounded-md p-2'>
            <i className="fas fa-phone text-white"></i>
            </div>
            <div className='flex flex-col'>
            <span className='text-md font-semibold'>Phone</span>
            <span className=' font-normal text-xs '>+234-902-4567-43</span>
            </div>
          </div>
           <div  className='p-2 border-2 border-yellow-600 border-opacity-30 rounded-md flex items-center gap-4'>
            <div className='bg-yellow-600 rounded-md p-2'>
            <i className="fas fa-location text-white"></i>
            </div>
            <div className='flex flex-col'>
            <span className='text-md font-normal'>Location</span>
            <span className=' font-normal text-xs '>208 Obi-wali road Rumuigbo PortHarcourt</span>
            </div>
          </div>
      </div>

      <hr className='h-1 rounded-full bg-opacity-30 my-4 bg-yellow-600 text-yellow-600' />

      <div className='flex justify-between items-center p-2'>
        <p className='font-medium'>Social media:</p>

        <div className='flex gap-5'>
        <a href="https://www.instagram.com/push2profit?igsh=bDh5dDF2a2JvcWE="><i className="hoverIcon fa-brands fa-instagram text-3xl text-yellow-600"></i></a>
       <a href="https://chat.whatsapp.com/IeaUOsy6j9EFXStRqQfOZX"> <i className="hoverIcon fa-brands fa-whatsapp text-3xl text-yellow-600"></i></a>
       <a href="https://www.facebook.com/profile.php?id=61566952406223&mibextid=ZbWKwL "><i className="hoverIcon fa-brands fa-facebook text-3xl text-yellow-600"></i></a>
        {/* <i className="fa-brands fa-linkedin text-3xl text-yellow-600"><a href=""></a></i> */}
        </div>
      </div>
    </div>
  )
}

export default ContactDetials
