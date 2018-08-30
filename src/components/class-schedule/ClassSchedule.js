import React from 'react'
import PDFIcon from 'react-icons/lib/fa/file-pdf-o'
import RightArrow from 'react-icons/lib/fa/angle-double-right'
import { Link } from 'react-router-dom'
import { weeklyClasses } from './ClassScheduleData'
import { IphoneImage } from '../Images'
import './ClassSchedule.css'
import ClassSchePDF from '../../pdf/class-schedule.pdf'

/* eslint-disable max-len */
const Data = () => {
  return weeklyClasses.map((o) => {
    // render
    return (
      <div className="weekly-schedule" key={o.id}>
        <div className="day">{o.day}</div>
        <div className="classType">
          {o.classDescription.map(i => <p key={i.id}>{i.classType}</p>)}
        </div>
      </div>
    )
  })
}

const Schedule = () => (
  <div className="schedule-container">
    <div className="bg-image schedule-img" />
    <div className="content">
      <p className="heading">Class Schedule & Calendar</p>
      <div className="calendar-class-container">
        <div className="rotate-phone">
          <p>Please rotate your phone to view class calendar</p>
          <IphoneImage />
        </div>

        <iframe
          title="ABT Class Schedule"
          src="https://app.jackrabbitclass.com/eventcalendar.asp?orgid=534011"
          frameBorder="0"
          scrolling="no"
        />
      </div>
      <div className="clear" />
      <div className="data-wrap">
        <Data />
      </div>
      <div className="clear" />
      <div className="btn-wrap">
        <a
          className="btn-sm bt"
          href={ClassSchePDF}
          target="_blank"
          rel="noopener noreferrer"
        >
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
