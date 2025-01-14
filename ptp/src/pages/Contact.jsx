import React from 'react'
import ContactForm from '../components/sctionContent/ContactForm'
import ContactHeader from '../components/sections/ContactHeader'
import ContactFormDetails from '../components/sections/ContactFormDetails'

const Contact = () => {
  return (
    <div className='overflow-hidden'>
      <ContactHeader />
     <ContactFormDetails />
    </div>
  )
}

export default Contact
