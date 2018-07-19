import React from 'react'
import Facebook from 'react-icons/lib/fa/facebook-official'
import Mail from 'react-icons/lib/fa/envelope'
import Phone from 'react-icons/lib/fa/phone'
import './Contact.css'

/* eslint-disable max-len */
const Contact = () => (
  <div className="contact-container">
    <div className="content">
      <p className="heading">Contact us:</p>
      <div id="wrap">
        <p>
          <a id="bt-email" className="bt" href="mailto:albemarleballettheatre@gmail.com" target="_top">
            <Mail /> albemarleballettheatre@gmail.com
          </a>
        </p>
        <p>
          <a className="bt" href="tel:+1-434-823-8888">
            <Phone /><span className="space" />434-823-8888
          </a>
        </p>
        <p>
          <a className="bt" href="https://www.facebook.com/AlbemarleBallet" target="_blank" rel="noopener noreferrer">
            <Facebook /> Visit us on Facebook
          </a>
        </p>
        <div className="mailing-address">
          <p>Mailing Address:</p>
          <p>P.O. Box 805 Crozet, VA 22932</p>
        </div>
        <hr />
      </div>

      <div className="clear" />
      <div className="map-wrap">
        <p>Directions to our Studio:</p>
        <iframe title="ABT Adress" frameBorder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.0082499261734!2d-78.70194868530913!3d38.07018897970674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b37fab9e8c95e3%3A0x2a61bbc7bcd57c38!2sAlbemarle+Ballet+Theatre!5e0!3m2!1sen!2sus!4v1517544462711" allowFullScreen />
      </div>
    </div>
  </div>

)

export default Contact
