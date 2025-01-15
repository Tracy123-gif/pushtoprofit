import React from 'react'
import useGsapScrollAnimation from '../../GsapHook'

const WhatsInForYou = () => {

  const ref = useGsapScrollAnimation({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1 },
    enter: { opacity: 1, y: 0, duration: 1 },
    leave: { opacity: 0, y: -50, duration: 1 },
  });


  return (
    <div ref={ref} className='p-28 mb-20 relative max-md:p-10'>
      <div className='flex max-sm:flex-wrap gap-36 max-sm:gap-12'>
        <h1 className='text-4xl text-yellow-700 font-bold max-sm:text-3xl '><i>Heres whats you'll acheive with us</i></h1>
        <div className='flex flex-col gap-9'>
            <div>
                <h1 className='font-bold text-2xl text-yellow-700 '>Personal and Professional Growth</h1>
                <p>  
                Enhance your personal development, grow your ideas, and learn how to turn them into action to achieve real progress.</p>
            </div>
            <div>
                <h1 className='font-bold text-2xl text-yellow-700'>Optimized Workflows and Productivity</h1>
                <p>You'll learn smart ways to optimize your workflows and resources, saving time, cutting costs, and boosting productivity.</p>
            </div>
            <div>
                <h1 className='font-bold text-2xl text-yellow-700 '>Visibility and Profitabilityy</h1>
                <p >You'll be able to set and meet your targets, become more visible to the right audience, and maximize profit.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhatsInForYou
