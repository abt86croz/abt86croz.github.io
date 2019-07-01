import React from 'react'
import Facebook from 'react-icons/lib/fa/facebook-official'
import Mail from 'react-icons/lib/fa/envelope'
import Phone from 'react-icons/lib/fa/phone'
import styled from 'styled-components'
import Button from '../styles/Button'
import Title from '../styles/Title'
import Content from '../styles/Content'
import './Contact.css'

const MailingAddress = styled.div`
  p {
    margin: 0;
    padding: 0;
    font-size: 18px !important;
  }
`

const StaffContactContainer = styled.div`
  margin: 0 auto;
  width: 500px;
  hr {
    width: 500px;
  }

  @media screen and (max-width: 568px) {
    width: auto;
    padding-left: 20px;
    hr {
      width: 90%;
    }
  }
`

const StaffContact = styled.div`
  font-size: 18px;
  padding-bottom: 5px;

  @media screen and (max-width: 568px) {
    font-size: 16px;
  }
`

/* eslint-disable max-len */
const Contact = () => (
  <div className="contact-container">
    <div className="bg-image contact-img" />
    <Content>
      <Title>Contact us:</Title>
      <div id="wrap">
        <div>
          <Button id="bt-email" href="mailto:Info@abtdance.org" target="_top">
            <Mail /> Info@abtdance.org
          </Button>
        </div>
        <div>
          <Button className="bt" href="tel:+1-434-823-8888">
            <Phone />
            434-823-8888
          </Button>
        </div>
        <div>
          <Button
            className="bt"
            href="https://www.facebook.com/AlbemarleBallet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook /> Visit us on Facebook
          </Button>
        </div>
        <MailingAddress>
          <p>Mailing Address:</p>
          <p>P.O. Box 805 Crozet, VA 22932</p>
        </MailingAddress>
        <hr />
      </div>

      <StaffContactContainer>
        <StaffContact>
          <span>Sally Hart</span>:{' '}
          <a href="mailto:Sally@abtdance.org" target="_top">
            Sally@abtdance.org
          </a>
        </StaffContact>
        <StaffContact>
          <span>Veronica Piller</span>:{' '}
          <a href="mailto:Veronica@abtdance.org" target="_top">
            Veronica@abtdance.org
          </a>
        </StaffContact>
        <StaffContact>
          <span>Ashley Geisler</span>:{' '}
          <a href="mailto:Ashley@abtdance.org" target="_top">
            Ashley@abtdance.org
          </a>
        </StaffContact>
        <StaffContact>
          <span>Nicky Coelho</span>:{' '}
          <a href="mailto:Nicky@abtdance.org" target="_top">
            Nicky@abtdance.org
          </a>
        </StaffContact>
        <StaffContact>
          <span className="bold">Send absences to</span>:{' '}
          <a href="mailto:Attendance@abtdance.org" target="_top">
            Attendance@abtdance.org
          </a>
        </StaffContact>
        <hr />
      </StaffContactContainer>

      <div className="clear" />
      <div className="map-wrap">
        <p>Directions to our Studio:</p>
        <iframe
          title="ABT Adress"
          frameBorder="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.0082499261734!2d-78.70194868530913!3d38.07018897970674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b37fab9e8c95e3%3A0x2a61bbc7bcd57c38!2sAlbemarle+Ballet+Theatre!5e0!3m2!1sen!2sus!4v1517544462711"
          allowFullScreen
        />
      </div>
    </Content>
  </div>
)

export default Contact
