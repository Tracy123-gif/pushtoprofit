import React from 'react'
import { Link } from 'react-router-dom'

const AboutBtn = () => {
  return (
        <Link to={'/about'}><button className=' hover py-3 px-11 rounded-full bg-yellow-700 border-white border-2 mt-4 capitalize drop-shadow-2xl shadow-2xl text-white '>Learn more</button></Link>

  )
}

export default AboutBtn
