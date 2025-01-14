import React from 'react'
import bookImg from '../../assets/bok.jpeg'
import businessImg from '../../assets/business2.jpeg'
import videoImg from '../../assets/vidImg.webp'
import EbookBtn from '../buttons/EbookBtn'
import GetVideosBtn from '../buttons/GetVideosBtn'
import ConsultBtn from '../buttons/ConsultBtn'
import useGsapScrollAnimation from '../../GsapHook'

const ConnetCard = () => {
  const ref = useGsapScrollAnimation({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1 },
    enter: { opacity: 1, y: 0, duration: 1 },
    leave: { opacity: 0, y: -50, duration: 1 },
    });



  return (
   <>
    {/* <div className='min-h-80 w-96 rounded-md p-3 bg-yellow-600 border-white border-4 text-white shadow-2xl drop-shadow-xl'>
      <h1 className='text-3xl text-white capitalize'> Get our ebooks</h1>
      <p className=' mt-3 mb-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, beatae.</p>
      <div className='relative h-44 w-full'>
        <img src={bookImg} className='w-full h-full absolute rounded-md' alt="" />
      </div>
      <EbookBtn />
   </div> 
   
   <div className='min-h-80 w-96 rounded-md p-3 bg-yellow-600 border-white border-4 text-white shadow-2xl drop-shadow-xl'>
      <h1 className='text-3xl text-white capitalize'> Get our Videos</h1>
      <p className=' mt-3 mb-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, beatae.</p>
      <div className='relative h-44 w-full object-scale-down'>
        <img src={videoImg} className='w-full h-full absolute rounded-md' alt="" />
      </div>
      <GetVideosBtn />
   </div> 
    */}
   <div ref={ref} className='min-h-80 w-96 rounded-md p-3  border-white border-4 text-black shadow-2xl drop-shadow-xl mt-11 '>
      <h1 className='text-3xl text-yellow-700 font-semibold capitalize'> book a consultation</h1>
      <p className=' mt-3 mb-7'>Need personalized assistance or have questions? Book a consultation now! Simply click the link below to connect with us directly on WhatsApp—we’re ready to help!</p>
      <div className='relative h-44 w-full'>
        <img src={businessImg} className='w-full h-full absolute rounded-md' alt="" />
      </div>
      <ConsultBtn />
   </div>
   </>
  )
}

export default ConnetCard
