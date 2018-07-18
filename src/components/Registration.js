import React from 'react'
import { Link } from 'react-router-dom'
import PDFIcon from 'react-icons/lib/fa/file-pdf-o'
import Pencil from 'react-icons/lib/fa/pencil'
import ClassSchePDF from '../pdf/class-schedule.pdf'
import SummerRegistrationForm from '../pdf/2018SummerRegistration.pdf'
import './styles/Registration.css'

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

const Scholarships = () => (
  <div className="scholarships-container">
    <div className="content">
      <p>Albemarle Ballet Theatre offers need-based scholarships at our school to local Albemarle Charlottesville greater area ballet jazz, and modern dance students through our <span className="bold italic">Dancing off the Streets™</span> program. Talent, ability, or body type have no bearing on our decision. The only requirement is that scholarship students volunteer throughout the school year. Registration, performance fees, dance wear, and dance gear are not included in the scholarship.</p>
      <p>If you would like to apply for a scholarship, please fill out our <a href={ClassSchePDF} target="_blank" rel="noopener noreferrer">registration form</a>, check <span className="bold">&quot;I am applying for a need-based scholarship&quot;</span>, and include your most recent tax return; we may request additonal information. Your application, personal information, and request are confidential.</p>
      <p><span className="bold">Please call us with any questions or requests at 434.823.8888.</span></p>
    </div>
  </div>
)

export { Forms, Scholarships }
