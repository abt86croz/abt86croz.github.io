import styled from 'styled-components'

const Content = styled.div`
  z-index: 9999;
  width: 70vw;
  float: right;
  padding-bottom: 40px;

  @media screen and (max-width: 768px) {
    width: 100%;
    border: none;
  }

  @media screen and (max-width: 568px) {
    width: 100%;
    border: none;
  }
`

export default Content
