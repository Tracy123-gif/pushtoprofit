import React from 'react'
import loadingGif from '../../assets/loading.gif'


const SubmitMessageBtn = ({isLoading, setIsLoading}) => {
  return (
    <button className=' hover py-3 px-11 rounded-xl bg-yellow-700 border-white border-2 mt-4 capitalize drop-shadow-2xl shadow-2xl text-white w-full flex justify-center'>
      {
        isLoading ? <img className='size-7 rounded-full bg-transparent' src={loadingGif} alt="" /> : 'Send Message'
      }
    </button>

  )
}


export default SubmitMessageBtn
