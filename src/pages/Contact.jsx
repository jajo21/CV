import React from 'react'
import ContactForm from '../components/Contact-form'
import imageUrl from '../images/images.js'

import './css/contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='contact-pic-div'>
        <img className='contact-pic' src={imageUrl.meRauk} alt="Johannes på bild" />
      </div>

      <div className='contact-form-div'>
        <h1>Kontakta mig</h1>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact