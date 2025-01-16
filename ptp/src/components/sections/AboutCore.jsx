import React from 'react'
import core from '../../assets/w2.jpg'
import useGsapScrollAnimation from '../../GsapHook';

const AboutCore = () => {

  const ref = useGsapScrollAnimation({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1 },
    enter: { opacity: 1, y: 0, duration: 1 },
    leave: { opacity: 0, y: -50, duration: 1 },
  });






  return (
     <div ref={ref} className='mt-20 mb-20 p-20 max-sm:p-5'>
            <div className='grid grid-cols-2 max-sm:grid-cols-1 items-center'>
              {/* image */}
              <div>
                  <img className='rounded-2xl ' src={core} alt="" />
              </div>
              {/* text */}
              <div className='p-10 flex flex-col gap-6  items-baseline h-fit max-sm:p-5'>
                  <h1 className='text-3xl '>What We Stand For</h1>
                  <p>Our core values guide everything we do. We uphold integrity, prioritizing honesty and transparency to build trust with our clients and partners. With a commitment to excellence, we strive for the highest standards, delivering exceptional quality in our work and outcomes. We believe in the power of collaboration, working closely with our clients to achieve shared goals. Staying ahead of the curve, we embrace innovation, leveraging creativity and forward-thinking solutions to drive success.</p>
              </div>
            </div>
          </div>
  )
}

export default AboutCore
