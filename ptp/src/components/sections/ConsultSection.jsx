import React from 'react'
import ConsultBtn from '../buttons/ConsultBtn'
import useGsapScrollAnimation from '../../GsapHook'

const ConsultSection = () => {

  const ref = useGsapScrollAnimation({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1 },
    enter: { opacity: 1, y: 0, duration: 1 },
    leave: { opacity: 0, y: -50, duration: 1 },
  });


  return (
    <div ref={ref} className='relative p-16 text-center mb-40 max-sm:p-6'>
      <div className='flex flex-col gap-9'>
        <h1 className='flex flex-col text-4xl font-bold max-sm:text-2xl text-yellow-700'>
            <span>Ready to take your business </span><span><i>to the next level?</i></span>
        </h1>
        <p className='px-40 max-md:p-0 '>A consultation with Push to Profit is your first step toward achieving your goals. get Personalized Advice, Expert Guidance and Actionable Steps</p>
      </div>
      <ConsultBtn />
    </div>
  )
}

export default ConsultSection
