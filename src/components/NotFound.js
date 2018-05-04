import React from 'react'
import { Link } from 'react-router-dom'
import { Minion404 } from './Images'
import './styles/NotFound.css'

export default () =>
  <div className="not-found-container">
    <Minion404 />
    <Link to="/" className="btn btn-blue">Take Me Home</Link>
  </div>
