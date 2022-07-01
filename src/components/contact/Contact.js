import React from 'react'
import Facebook from 'react-icons/lib/fa/facebook-official'
import Mail from 'react-icons/lib/fa/envelope'
import Phone from 'react-icons/lib/fa/phone'
import {
  MailingAddress,
  StaffContact,
  StaffContactContainer,
  MapContainer,
  Wrapper,
  ContactImage,
} from './ContactStyles'
import Button from '../styles/Button'
import Title from '../styles/Title'
import Content from '../styles/Content'

/* eslint-disable max-len */
const Contact = () => (
  <div className="contact-container">
    <ContactImage className="bg-image" />
    <Content>
      <Title>Contact us:</Title>
      <Wrapper>
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
      </Wrapper>

      <StaffContactContainer>
        <StaffContact>
          <span>Sally Hart | Owner/Director</span>
          <br />
          <a href="mailto:Sally@abtdance.org" target="_top">
            Sally@abtdance.org
          </a>
        </StaffContact>
        <StaffContact>
          <span>Veronica Piller | Artistic Director</span>
          <br />
          <a href="mailto:Veronica@abtdance.org" target="_top">
            Veronica@abtdance.org
          </a>
        </StaffContact>
        <StaffContact>
          <span>Nicky Coelho | Executive Director</span>
          <br />
          <a href="mailto:Nicky@abtdance.org" target="_top">
            Nicky@abtdance.org
          </a>
        </StaffContact>
        <StaffContact>
          <span>Anna Finan | School Coordinator and Billing</span>
          <br />
          <a href="mailto:Anna@abtdance.org" target="_top">
            Anna@abtdance.org
          </a>
        </StaffContact>
        <hr />
      </StaffContactContainer>

      <div className="clear" />
      <MapContainer>
        <p>Directions to our Studio:</p>
        <iframe
          title="ABT Adress"
          frameBorder="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.0082499261734!2d-78.70194868530913!3d38.07018897970674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b37fab9e8c95e3%3A0x2a61bbc7bcd57c38!2sAlbemarle+Ballet+Theatre!5e0!3m2!1sen!2sus!4v1517544462711"
          allowFullScreen
        />
      </MapContainer>
    </Content>
  </div>
)

export default Contact
