import React, { Component } from 'react'
import postscribe from 'postscribe'

import PDFIcon from 'react-icons/lib/fa/file-pdf-o'
import SummerClassSched from '../../pdf/2019-summer-class-schedule.pdf'
import SummerCampSched from '../../pdf/2019-summer-camp-schedule.pdf'
import './SummerProgram.css'
import { SummerPosterImage } from '../Images'

/* eslint-disable max-len */
export default class SummerProgram extends Component {
  componentDidMount() {
    const summerCamps =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=Summer%20Camp&hidecols=Gender,Ages,EndDate,Session,openings&sort=times"></script>'

    const summerClasses =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=Summer%20Classes&hidecols=Gender,Ages,EndDate,Session,openings&sort=class"></script>'

    // postscribe
    postscribe('#summer-camps', summerCamps)
    postscribe('#summer-classes', summerClasses)
  }
  render() {
    return (
      <div className="summer-program-container">
        <div className="summer-poster">
          <SummerPosterImage />
        </div>
        <div className="summer-content-wrap">
          <div className="summer-content">
            <p className="title">Summer Camps</p>

            {/* Exploring Ballet Camp */}
            <p className="sub-title">Exploring Ballet | Ages 3-5 | $175</p>
            <p className="date">August 5 - 8 | August 12 – 15 | Monday - Thursday | 10am - 12pm</p>
            <p>
              A young dancer&apos;s very first peek at classical ballet! This camp teaches ballet
              technique, flexibility, coordination, balance, creative movement and games, and
              stories of the classical ballets. The dancers decorate their own costumes (that they
              keep after the camp), and share a demonstration recital on the last day. Craft
              supplies & snacks are included.
            </p>

            {/* Younger Dancer Camp */}
            <p className="sub-title">The Young Dancer Camp | Ages 6+ and 9+ | $325</p>
            <p className="date">July 8 - 12 | Beginner | Monday - Friday | Ages 6+ | 9am - 3pm</p>
            <p className="date">
              July 15 - 19 | Beginner/Intermediate | Monday - Friday | Ages 9+ | 9am - 3pm
            </p>
            <p>
              These well-rounded camps are for the young dancer that would like to explore and
              experience the world of ballet and dance.They offer ballet technique, jazz, modern,
              theatre, West Coast Swing, Tango, Pilates, and conditioning and stretching.
            </p>

            {/* Dance Conservatory Camp */}
            <p className="sub-title">
              Dance Conservatory: Intermediate and Advanced/Pre-Professional
            </p>
            <p className="date">July 22 – 26 | Intermediate | Monday - Friday | 9am - 4pm | $385</p>
            <p className="date">
              July 29 - August 2 | Advanced | Monday - Friday | 9am - 4pm | $435
            </p>
            <p>
              For dancers that would like to fully immerse themselves in the world of ballet and
              dance, and take a more serious step with their training. These camps offer ballet
              technique, pointe*, variations, jazz, modern, character, Capoeira, theatre, West Coast
              Swing, and Pilates. *For dancers who are already en pointe prior to signing up for the
              camp. Dancers who are not yet dancing en pointe may take the pointe classes as
              pre-pointe, and will gain strength in preparation for pointe work.
            </p>
          </div>
        </div>
        <p className="title">2019 Summer Class Schedule</p>
        {/* Tables */}
        <div className="left-container">
          <div className="summer-schedule">
            <div className="summer-schedule">
              <div className="column-1 left">
                <p className="head">Monday</p>
                <p>4:00 - 5:15pm Ballet IIA/B</p>
                <p>5:15 - 7:15pm Ballet III</p>
                <p />
              </div>
              <div className="column-1 left">
                <p className="head">Tuesday</p>
                <p>4:00 - 5:00pm Beginner/Int Modern/Jazz</p>
                <p>5:15 - 6:45pm Int/Adv Modern/Jazz</p>
                <p>7:00 - 8:30pm Advanced Ballet</p>
              </div>
              <div className="column-1 left">
                <p className="head">Wednesday</p>
                <p>4:00 - 5:00pm Ballet IA/B</p>
                <p>5:15 - 7:15pm Advanced Ballet</p>
                <p />
              </div>
              <div className="column-1 left">
                <p className="head">Thursday</p>
                <p>4:00 - 5:00pm Ballet IB/C</p>
                <p>5:15 - 7:15pm Ballet III</p>
                <p>7:30 - 8:30pm Mat Pilates</p>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />

        <div className="summer-program-registration-container">
          <p className="registration-wave">
            $15 Registration Fee | Waived for Multi-Student Families
          </p>
          <div id="summer-camps">
            <p className="heading show">Summer Camps | July 8 – August 15, 2019</p>
          </div>
          <div id="summer-classes">
            <p className="heading show">Summer Classes | 6-Weeks | June 17 – August 7, 2019</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="btn-wrap">
          <a className="bt" href={SummerClassSched} target="_blank" rel="noopener noreferrer">
            <PDFIcon /> SUMMER CLASS schedule
          </a>
          <a className="bt" href={SummerCampSched} target="_blank" rel="noopener noreferrer">
            <PDFIcon /> SUMMER CAMP schedule
          </a>
        </div>
      </div>
    )
  }
}
