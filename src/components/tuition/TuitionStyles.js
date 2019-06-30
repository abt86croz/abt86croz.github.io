import styled from 'styled-components'
import img from '../../images/bkgrnd/tuition.jpg'

export const TuitionContainer = styled.div`
  margin: 0 auto;
  &::after {
    content: ' ';
    display: block;
    clear: both;
  }

  p {
    padding: 0 30px 0 20px;
  }

  p:last-child {
    padding-bottom: 30px;
  }

  @media screen and (max-width: 568px) {
    p {
      margin: 0 auto;
      padding: 5px 10px 0 17px;
    }
  }
`

export const TuitionImage = styled.div`
  background: url(${img}) no-repeat;
  background-size: 100% auto;
`

export const TuitionClass = styled.p`
  span {
    font-weight: bold;
    text-decoration: underline;
    display: block;
  }
`

export const Table = styled.div`
  padding: 30px 0;
  margin: 0 auto;
  text-align: center;
  width: 375px;

  #id11 {
    border-bottom: 0.6px solid #c7c8c9;
  }

  @media screen and (max-width: 568px) {
    width: 350px;
  }
`

export const FlexContainer = styled.div`
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  width: 100%;
`

export const LeftRow = styled.div`
  width: 200px;
  border: 0.6px solid #c7c8c9;
  border-bottom: none;
  text-align: left;
  padding-left: 6px;
`

export const RightRow = styled.div`
  width: 200px;
  border: 0.6px solid #c7c8c9;
  border-bottom: none;
  text-align: left;
  padding-left: 6px;
`

export const CenterRow = styled.div`
  text-align: center;
  background: lightgray;
  width: 375px;
  border: 0.7px solid #c7c8c9;
  border-bottom: none;
  font-weight: bold;

  @media screen and (max-width: 568px) {
    width: 350px;
  }
`
