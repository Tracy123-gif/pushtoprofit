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
                <h1 className='font-bold text-2xl text-yellow-700'>Clear Growth Strategies</h1>
                <p>Receive customized, actionable plans tailored to your business goals, ensuring measurable progress and long-term success.</p>
            </div>
            <div>
                <h1 className='font-bold text-2xl text-yellow-700'>Streamlined Operations</h1>
                <p>Discover ways to optimize your workflows and resources, saving time, cutting costs, and boosting productivity.</p>
            </div>
            <div>
                <h1 className='font-bold text-2xl text-yellow-700 '>Increased Profitability</h1>
                <p >Unlock untapped revenue potential and maximize your profits with proven techniques and expert support.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhatsInForYou
