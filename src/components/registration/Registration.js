import React from 'react'
import { Link } from 'react-router-dom'
import PDFIcon from 'react-icons/lib/fa/file-pdf-o'
import Pencil from 'react-icons/lib/fa/pencil'
import ScholarshipApplication from '../../pdf/scholarship-application.pdf'
import WorkStudyApplication from '../../pdf/work-study-application.pdf'
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

const FinancialAid = () => (
  <div className="financial-aid-container">
    <div className="content">
      <p>
        The goal of our Scholarship and Work-Study programs are to ensure that
        all students, regardless of their financial status, are given the
        opportunity to study dance in a professional school. ABT has partnered
        with The Studio for the Performing Arts (SFTPA), a 501(C)(3) non-profit
        organization directed by Sally Hart, to offer scholarships based on
        financial need to ABT students.
      </p>
      <p>
        ABT offers a limited number of scholarships and work-study positions.
        Click on links below for printable application forms. You can submit
        your application via email to <a href="mailto:albemarleballettheatre@gmail.com" target="_top"> albemarleballettheatre@gmail.com</a>, in
        person, or by mail. If you have any questions, please contact ABT at
          <a href="tel:+1-434-823-8888" target="_top"> (434) 823-8888</a>.
      </p>
      <p className="italic">
        Mailing Address: <br />
        Albemarle Ballet Theatre <br />
        P.O. Box 805 <br />
        Crozet, VA, 22932 <br />
      </p>
      <p>
        With the help of local businesses and community members,
        SFTPA has provided over $60K in scholarships to nearly sixty local students.
      </p>
      <div className="button-wrap">
        <a className="bt" href={ScholarshipApplication} target="_blank" rel="noopener noreferrer">Scholarship Application <PDFIcon /></a>
        <a className="bt" href={WorkStudyApplication} target="_blank" rel="noopener noreferrer">Work-Study Application <PDFIcon /></a>
      </div>
    </div>
  </div>
)

export { Forms, FinancialAid }
