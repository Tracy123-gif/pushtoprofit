import React from 'react'
import gif from '../../assets/w1.jpg'
import useGsapScrollAnimation from '../../GsapHook';

const AboutWho = () => {

  
  const ref = useGsapScrollAnimation({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1 },
    enter: { opacity: 1, y: 0, duration: 1 },
    leave: { opacity: 0, y: -50, duration: 1 },
  });
  


  
  return (
    <div ref={ref} className='mt-20 mb-20 p-20 max-sm:p-0 '>
      <div className='flex max-sm:flex-wrap justify-center items-center max-sm:p-5'>
        {/* image */}
        <div className='w-fit h-fit '>
            <img src={gif} alt="" className='max-sm:relative rounded-3xl ' />
        </div>
        {/* text */}
        <div className='p-10 flex flex-col gap-6  items-baseline h-fit max-sm:p-5'>
            <h1 className='text-3xl '>Who We Are?</h1>
            <p>At Push to Profit, we’re passionate about helping businesses thrive. Founded with a vision to empower entrepreneurs and organizations, we specialize in delivering actionable strategies that drive growth, optimize operations, and maximize profits. Our team brings years of expertise and a results-driven approach to every client partnership</p>
        </div>
      </div>
    </div>
  )
}

export default AboutWho
