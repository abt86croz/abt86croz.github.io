import React from 'react'
import { Link } from 'react-router-dom'
import PDFIcon from 'react-icons/lib/fa/file-pdf-o'
import Pencil from 'react-icons/lib/fa/pencil'
import SummerRegistrationForm from '../../pdf/2018SummerRegistration.pdf'
import ClassSchePDF from '../../pdf/class-schedule.pdf'
import './Registration.css'

/* eslint-disable max-len */
const Forms = () => (
  <div className="registration-container">
    <div className="content">
      <a className="bt" href={ClassSchePDF} target="_blank" rel="noopener noreferrer">Schedule & Registration <PDFIcon /></a>
      <Link to="/registration/scholarships" className="bt">Scholarships <Pencil /></Link>
      <a className="bt" href={SummerRegistrationForm} target="_blank" rel="noopener noreferrer">Summer Registration <PDFIcon /></a>
    </div>
  </div>
)


export default Forms
