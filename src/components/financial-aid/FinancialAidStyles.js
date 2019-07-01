import styled from 'styled-components'
import img from '../../images/bkgrnd/financial.jpg'

export const ButtonContainer = styled.div`
  padding-top: 20px;
`

export const Highlight = styled.div`
  p {
    padding-top: 0 !important;
  }
`

export const FinancialContainer = styled.div`
  margin: 0 auto;
  &::after {
    content: ' ';
    display: block;
    clear: both;
  }

  p {
    padding: 20px 30px 0 20px;
  }

  p:nth-child(2) {
    padding-top: 10px;
  }

  p:last-child {
    padding-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 568px) {
    margin: 0 auto;
    background-size: 100% 100%;
  }
`
export const FinancialAidImage = styled.div`
  background: url(${img}) no-repeat;
  background-size: 100% auto;
`
