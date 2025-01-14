import React from 'react'
import ContactDetials from '../sctionContent/ContactDetials'
import ContactForm from '../sctionContent/ContactForm'

const ContactFormDetails = () => {
  return (
    <div className='flex justify-center place-items-start mt-24 p-12 w-screen gap-7 max-md:flex-wrap max-sm:p-5'>
      <ContactForm />
      <ContactDetials />
    </div>
  )
}

export default ContactFormDetails
