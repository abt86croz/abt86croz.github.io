import styled from 'styled-components'
import img from '../../images/bkgrnd/contact.jpg'

export const ContactContainer = styled.div`
  margin: 0 auto;
  &::after {
    content: ' ';
    display: block;
    clear: both;
  }
`

export const ContactImage = styled.div`
  background: url(${img}) no-repeat;
  background-size: 100% auto;
`

export const MailingAddress = styled.div`
  p {
    margin: 0;
    padding: 0;
    font-size: 18px !important;
  }
`

export const StaffContactContainer = styled.div`
  margin: 0 auto;
  width: 430px;
  hr {
    width: 500px;
  }

  @media screen and (max-width: 568px) {
    width: auto;
    hr {
      width: 90%;
    }
  }
`

export const StaffContact = styled.div`
  font-size: 18px;
  padding-bottom: 5px;
  padding-left: 70px;

  @media screen and (max-width: 768px) {
    padding-left: 70px;
  }

  @media screen and (max-width: 568px) {
    font-size: 14px;
    padding-left: 25px;
  }
`

export const MapContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;
  iframe {
    width: 500px;
    height: 450px;
  }

  @media screen and (max-width: 768px) {
    iframe {
      width: 500px;
      height: 350px;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 568px) {
    iframe {
      width: 300px;
      height: 350px;
      margin: 0 auto;
    }
  }
`
export const Wrapper = styled.div`
  display: block;

  p {
    font-size: 28px;
    text-align: center;
  }

  .bt {
    color: #232223;
    text-decoration: none !important;
    font-size: 18px;
    font-weight: 300;
    padding: 10px 20px;
    margin: 20px auto;
    text-align: center;
    display: block;
    width: 300px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  .bt:visited {
    color: #232223;
  }

  .bt:hover {
    color: #9b863c;
  }

  #bt-email {
    font-size: 14px;
    font-weight: 100;
    padding: 13px 20px;
  }

  /* REZISE REACT ICON */

  #bt-email svg {
    font-size: 25px;
    margin: -4px 3px 0px 0;
  }

  svg {
    font-size: 30px;
    margin: -4px 3px 0px 0;
  }

  hr {
    width: 300px;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 18px;
    }
  }
`
