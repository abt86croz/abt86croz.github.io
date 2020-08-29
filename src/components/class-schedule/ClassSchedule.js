import React from 'react'
import PDFIcon from 'react-icons/lib/fa/file-pdf-o'
// import RightArrow from 'react-icons/lib/fa/angle-double-right'
// import { Link } from 'react-router-dom'
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
      <p className="heading">School Calendar</p>
      <div className="calendar-class-container">
        <div className="rotate-phone">
          <p>Please rotate your phone to view class calendar</p>
          <IphoneImage />
        </div>

        <iframe
          className="iframe-schedule"
          title="ABT Class Schedule"
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=bmlja3lAYWJ0ZGFuY2Uub3Jn&amp;src=YWJ0ZGFuY2Uub3JnX24xaWIxNGFra2UzamVsNnBzdDh1Y25idHRzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=YWJ0ZGFuY2Uub3JnX2kwN202YXNvaDZwcXRhZWJjdWlhZmJmYmtnQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=YWJ0ZGFuY2Uub3JnX2ZpMTRzNTZnbTI1cnYybnNhMGNmMXM5dGpnQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=YWJ0ZGFuY2Uub3JnX2RoM3V2OXY1azZzMW8zY3ZtMXVoZHFvbnQ4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=YWJ0ZGFuY2Uub3JnXzB1c20yZzZsdTdqZW1tNHNkMjRpYWdlY3FzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=YWJ0ZGFuY2Uub3JnX2NqZmJqMTJ1dDhvcnJmMmJhb2wzNjYzZm9vQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=YWJ0ZGFuY2Uub3JnXzByOHJncXA4ZjlldGhsYTkyMWFzM3FqOHZzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%23C0CA33&amp;color=%2333B679&amp;color=%23F6BF26&amp;color=%23D81B60&amp;color=%238E24AA&amp;color=%233F51B5&amp;color=%23039BE5&amp;color=%230B8043&amp;showTitle=0"
          frameBorder="0"
          scrolling="yes"
        />
      </div>
      <ClassListings />
      {/* <div className="btn-wrap">
        <a className="btn-sm bt" href={ClassSchePDF} target="_blank" rel="noopener noreferrer">
          <PDFIcon /> Print Weekly Class Schedule
        </a>
        <Link to="/classes/description" className="btn-sm bt" href="">
          Class Descriptions <RightArrow />
        </Link>
      </div> */}
    </div>
  </div>
)

export default Schedule
