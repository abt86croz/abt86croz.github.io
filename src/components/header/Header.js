import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Images'
import './Header.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <Logo />
    </Link>
  </div>
)

export default Header
