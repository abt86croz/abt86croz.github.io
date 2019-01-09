import React from 'react'
import PDFIcon from 'react-icons/lib/fa/file-pdf-o'
import RightArrow from 'react-icons/lib/fa/angle-double-right'
import { Link } from 'react-router-dom'
import { IphoneImage } from '../Images'
import './ClassSchedule.css'
import ClassSchePDF from '../../pdf/class-schedule.pdf'

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
          scrolling="no"
        />
      </div>
      <div className="clear" />
      <div className="iframe-container">
        <p className="heading show">Beginning Ballet | January 3 - May 3, 2019</p>
        <iframe
          className="iframe-listing"
          src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsDirect?OrgID=534011&Cat2=Beginning%20Ballet&hidecols=Gender,Ages,EndDate,Session,openings&sort=class"
          frameBorder="0"
          allowFullScreen
          title="ABT Class Schedule"
        />
      </div>
      <div className="clear" />

      <div className="iframe-container">
        <p className="heading show">8-Week Sessions</p>
        <span className="subtitle-listing">Session 1: January 3 – February 27, 2019</span>
        <span className="subtitle-listing">Session 2: February 28 – May 1, 2019</span>
        <iframe
          className="iframe-listing"
          src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsDirect?OrgID=534011&Cat1=8-Week%20Sessions&hidecols=Gender,Ages,EndDate,Session,Openings&sort=days"
          frameBorder="0"
          allowFullScreen
          title="ABT Class Schedule"
        />
      </div>
      <div className="clear" />

      <div className="iframe-container">
        <p className="heading show">By Placement Only | January 3 – May 3, 2019</p>
        <iframe
          className="iframe-listing placement"
          src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsDirect?OrgID=534011&Cat2=by%20placement%20only&hidecols=Gender,Ages,EndDate,Session,Openings,Class%20Starts&sort=days&sort=class"
          frameBorder="0"
          allowFullScreen
          title="ABT Class Schedule"
        />
      </div>
      <div className="clear" />

      <div className="iframe-container">
        <p className="heading show">Mat Pilates | 1-Month Sessions</p>
        <iframe
          className="iframe-listing"
          src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsDirect?OrgID=534011&Cat2=fitness&hidecols=Description,Gender,Ages,EndDate,Session,Openings&sort=days&sort=class"
          frameBorder="0"
          allowFullScreen
          title="ABT Class Schedule"
        />
      </div>
      <div className="clear" />

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
