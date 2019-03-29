import React from 'react'
import PDFIcon from 'react-icons/lib/fa/file-pdf-o'
import RightArrow from 'react-icons/lib/fa/angle-double-right'
import { Link } from 'react-router-dom'
import { IphoneImage } from '../Images'
import ClassSchePDF from '../../pdf/class-schedule.pdf'
import ClassListings from './ClassListings'
import './ClassSchedule.css'
import './ClassListings.css'

/* eslint-disable max-len */
const Schedule = () => (
  <div className="schedule-container">
    <div className="bg-image schedule-img" />
    <div className="content">
      <div className="btn-wrap">
        <a className="btn-sm bt" href={ClassSchePDF} target="_blank" rel="noopener noreferrer">
          <PDFIcon /> Print Weekly Class Schedule
        </a>
      </div>
      <p className="heading">Class Calendar</p>
      <div className="calendar-class-container">
        <div className="rotate-phone">
          <p>Please rotate your phone to view class calendar</p>
          <IphoneImage />
        </div>

        <iframe
          className="iframe-schedule"
          title="ABT Class Schedule"
          src="https://app.jackrabbitclass.com/eventcalendar.asp?orgid=534011"
          frameBorder="0"
          scrolling="yes"
        />
      </div>
      <ClassListings />
      <div className="btn-wrap">
        <a className="btn-sm bt" href={ClassSchePDF} target="_blank" rel="noopener noreferrer">
          <PDFIcon /> Print Weekly Class Schedule
        </a>
        <Link to="/classes/description" className="btn-sm bt" href="">
          Class Descriptions <RightArrow />
        </Link>
      </div>
    </div>
  </div>
)

export default Schedule
