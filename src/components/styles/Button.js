import styled from 'styled-components'

const Button = styled.a`
  color: #232223;
  text-decoration: none !important;
  font-weight: 300;
  font-size: 20px;
  padding: 15px;
  margin: 20px auto;
  text-align: center;
  display: block;
  width: 300px;
  background-color: #b1c5ca;

  &:visited {
    background-color: #b1c5ca;
    color: #232223;
  }

  &:hover {
    color: #9b863c;
  }
`

export default Button
