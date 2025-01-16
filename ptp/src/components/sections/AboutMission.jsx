import React from 'react'
import mission from '../../assets/mission.jpg'
import useGsapScrollAnimation from '../../GsapHook';

const AboutMission = () => {



  const ref = useGsapScrollAnimation({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1 },
    enter: { opacity: 1, y: 0, duration: 1 },
    leave: { opacity: 0, y: -50, duration: 1 },
  });


  return (
    <div ref={ref} className='mt-20 mb-20 p-20 max-sm:p-5'>
         <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-5 '>
           {/* image */}
           <div className='w-fit'>
               <img className=' rounded-2xl' src={mission} alt="" />
           </div>
           {/* text */}
           <div className=' flex  flex-col gap-6  items-baseline h-fit max-sm:p-5'>
               <h1 className='text-3xl '>What we offer</h1>
               <p>Our mission is simple: to unlock the full potential of every business we work with. We believe that with the right guidance, every challenge can become an opportunity, and every business can achieve its vision. The goal is to help develop and build business owners who own small and medium businesses.</p>
           </div>
         </div>
       </div>
  )
}

export default AboutMission
