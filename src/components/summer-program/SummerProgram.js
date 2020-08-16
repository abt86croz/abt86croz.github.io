import React, { Component } from 'react'
// import styled from 'styled-components'
import postscribe from 'postscribe'

// import PDFIcon from 'react-icons/lib/fa/file-pdf-o'
// import SummerClassSched from '../../pdf/2020-summer-class-schedule.pdf'
// import SummerHandout from '../../pdf/2020-summer-handout.pdf'
// import SummerCampSched from '../../pdf/2020-summer-camp-schedule.pdf'
import SummerPoster from '../../images/site/summer/summer-2020.png'
import './SummerProgram.css'

// const CampTitle = styled.p``

/* eslint-disable max-len */
export default class SummerProgram extends Component {
  componentDidMount() {
    const summerCamps =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=Summer%20Camp&hidecols=Class%20Starts,Gender,Ages,EndDate,Session,openings&sort=times"></script>'

    const summerClasses =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=Summer%20Classes&hidecols=Class%20Starts,Gender,Ages,EndDate,Session,openings&sort=class"></script>'

    // postscribe
    postscribe('#summer-camps', summerCamps)
    postscribe('#summer-classes', summerClasses)
  }

  render() {
    return (
      <div className="summer-program-container">
        <div className="summer-poster">
          <img className="logo-image" src={SummerPoster} alt="abt logo" />
        </div>
        {/*
        <div className="summer-content-wrap">
          <div className="summer-content">
          <p className="title">Dance Camps</p>
            <CampTitle className="sub-title">Exploring Ballet | Ages 3-5 | $175</CampTitle>
            <p className="date">June 15 - 18 | Monday - Thursday | 10am - 12pm</p>
            <p>
              A young dancer’s very first peek at classical ballet! This camp teaches ballet technique, flexibility,
              coordination, balance, creative movement & games, and stories of the classical ballets. The dancers
              decorate their own costumes (that they keep after the camp) and share a demonstration on the last day.
              Craft supplies and snacks are included.
            </p>

            <CampTitle className="sub-title">Creative Arts for Dancers | Ages 6-10 | $335</CampTitle>
            <p className="date">June 22 - 26 | Monday - Friday | 9am - 3pm</p>

            <CampTitle className="sub-title">Creative Arts for Dancers | Ages 11+ | $400</CampTitle>
            <p className="date">July 6 - July 10 | Monday - Friday | 9am - 4pm</p>
            <br />
            <p>
              These well-rounded camps are for the dancer that would like to expand their experience of the dance world.
              Classes include modern dance, choreography, Capoeira, stage hair & makeup, theatre, drama, music theory,
              sewing, and social dancing.
            </p>
          </div>
        </div>
        */}

        {/* Tables */}
        <div className="left-container">
          {/*
          <div className="summer-schedule">
            <div className="summer-schedule">
              <div className="column-1 left">
                <p className="head">Monday</p>
                <p />
                <p />
                <p />
                <p>3:30 - 5:30 PM Ballet IIIB</p>
                <p>5:45 - 7:00 PM Jazz II/III</p>
                <p>7:15 - 8:30 PM Pointe II/III</p>
              </div>
              <div className="column-1 left">
                <p className="head">Tuesday</p>
                <p />
                <p />
                <p />
                <p>3:30 - 4:30 PM Ballet IIA/B</p>
                <p>4:45 - 6:45 PM Ballet IV</p>
                <p>7:00 - 8:15 PM Modern II/III</p>
              </div>
              <div className="column-1 left">
                <p className="head">Wednesday</p>
                <p>10:00 - 10:45 AM Creative Movement (Ages 2-4)</p>
                <p>11:00 - 11:45 PM Exploring Ballet</p>
                <p />
                <p>4:00 - 5:00 PM Ballet IA</p>
                <p>5:15 - 6:15 PM Ballet IB</p>
                <p />
              </div>
              <div className="column-1 left">
                <p className="head">Thursday</p>
                <p />
                <p />
                <p>3:30 - 4:30 PM Modern I</p>
                <p>4:45 - 5:45 PM Mat Pilates</p>
                <p>6:00 - 7:00 PM Jazz I</p>
                <p>7:15 - 8:15 PM Pointe I</p>
              </div>
              <div className="column-1 left">
                <p className="head">Friday</p>
                <p />
                <p />
                <p />
                <p>3:30 - 5:00 PM Ballet IIIA</p>
                <p>5:15 - 7:15 PM Advanced Ballet</p>
                <p />
              </div>
            </div>
          </div>
            */}
        </div>
        <div className="clear" />
        <div className="summer-program-registration-container">
          {/* <p className="registration-wave">$15 Registration Fee | Waived for Multi-Student Families</p> */}
          <div id="summer-camps">
            {/* <p className="heading show">Summer Camps | June 15 - July 10, 2020</p> */}
            <p>
              {/* <span className="underline">Early Bird Discount:</span> Register by March 1 to receive 10% off camps */}
            </p>
            <p>
              {/* <span className="underline">Camp/Class Combo:</span> 10% off camps when you also enroll in classes */}
            </p>
            {/* <p>*Discounts will be applied to your account within 72-hours</p> */}
          </div>
          <div id="summer-classes">
            {/* <p className="heading show">Online Summer Classes | June 15 - August 14, 2020</p> */}
            {/* <p>Multi-class discounts automatically applied during enrollment</p> */}
          </div>
        </div>
        {/* Buttons */}
        {/*
        <div className="btn-wrap">
          <a className="bt" href={SummerClassSched} target="_blank" rel="noopener noreferrer">
            <PDFIcon /> SUMMER CLASS schedule
          </a>
        <a className="bt" href={SummerCampSched} target="_blank" rel="noopener noreferrer">
            <PDFIcon /> SUMMER CAMP schedule
          </a>

          <a className="bt" href={SummerHandout} target="_blank" rel="noopener noreferrer">
            <PDFIcon /> SUMMER HANDOUT
          </a>
        </div>
        */}
      </div>
    )
  }
}
