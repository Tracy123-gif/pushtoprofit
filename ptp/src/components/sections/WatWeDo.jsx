import React from 'react'
import AboutBtn from '../buttons/AboutBtn'
import useGsapScrollAnimation from '../../GsapHook'

const WatWeDo = () => {
  const ref = useGsapScrollAnimation({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1 },
    enter: { opacity: 1, y: 0, duration: 1 },
    leave: { opacity: 0, y: -50, duration: 1 },
  });


  return (
    <div ref={ref} className='relative p-11 mt-32 mb-32 max-sm:mb-56  max-sm:p-5'>
      <div className='grid grid-cols-2 justify-center w-full h-36  gap-10 px-8 text m-auto max-sm:grid-cols-1 max-sm:px-5'>
        <h1 className='text-4xl font-semibold text-yellow-800'><i>About Us</i></h1>
        <div className=''>
            <p className='mb-4'>At Push to Profit, we’re dedicated to empowering individuals and businesses to achieve their goals. Through personalized consultations, actionable strategies, and unwavering support, we help you turn potential into profit. Let’s grow together!</p>
            <AboutBtn/>
        </div>
      </div>
    </div>
  )
}


export default WatWeDo
