import React, { Component } from 'react'
import styled from 'styled-components'
import postscribe from 'postscribe'

import PDFIcon from 'react-icons/lib/fa/file-pdf-o'
import SummerClassSched from '../../pdf/Summer2022-Schedule.pdf'
import SummerHandout from '../../pdf/summer-handout.pdf'
// import SummerCampSched from '../../pdf/2020-summer-camp-schedule.pdf'
import SummerPoster from '../../images/site/summer/summer-2022.png'
import './SummerProgram.css'

const CampTitle = styled.p``

const DiscountContainer = styled.div`
  padding: 40px;
  text-align: center;
`
const RatesContainer = styled.div`
  /* text-align: left; */
`

/* eslint-disable max-len */
export default class SummerProgram extends Component {
  componentDidMount() {
    // const summerClasses =
    //   '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=Summer%20Classes&hidecols=Tuition,Class%20Starts,Gender,Ages,EndDate,Session,openings&sort=Class"></script>'
    const summerCamps =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=summer%20camp&hidecols=Gender,Tuition,Ages,EndDate,Session,Openings,Class%20Starts&sort=age,times"></script>'
    const balletClassesSummer =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&amp;Cat1=Summer%20Classes&Cat3=Ballet&hidecols=Gender,tuition,Ages,EndDate,Session,openings,Class%20Starts&amp;sort=Times"></script>'
    const jazz =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&amp;Cat1=Summer%20Classes&Cat3=Jazz&hidecols=Gender,tuition,Ages,EndDate,Session,openings,Class%20Starts&amp;sort=times"></script>'
    const pilates =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&amp;Cat1=Summer%20Classes&Cat3=Theatre&hidecols=Gender,tuition,Ages,EndDate,Session,openings,Class%20Starts&amp;sort=age"></script>'
    //  postscribe('#summer-classes', summerClasses)
    postscribe('#summer-camps', summerCamps)
    postscribe('#summer-ballet', balletClassesSummer)
    postscribe('#summer-jazz', jazz)
    postscribe('#summer-pilates', pilates)
  }

  render() {
    return (
      <div className="summer-program-container">
        {/* Poster */}
        <div className="summer-poster">
          <img className="logo-image" src={SummerPoster} alt="abt logo" />
        </div>

        <div className="summer-content-wrap">
          <div className="summer-content">
            <p className="title">Summer Dance Camps</p>
            <div className="btn-wrap">
              <a className="bt" href={SummerHandout} target="_blank" rel="noopener noreferrer">
                <PDFIcon /> SUMMER HANDOUT
              </a>
            </div>
            <CampTitle className="sub-title">Exploring Ballet | Ages 3-4 | $180</CampTitle>
            <p className="date">June 13 - 16 | Monday - Thursday | 10am - 12pm</p>
            <p>
              A young dancer’s very first peek at classical ballet! This camp teaches ballet technique, flexibility,
              coordination, balance, creative movement and games, and stories of the classical ballets. The dancers
              decorate their own costumes (that they keep after the camp) and share a demonstration on the last day.
              Craft supplies and snacks are included.
            </p>
            <CampTitle className="sub-title">Beginner Dance | Ages 5+ | $315</CampTitle>
            <p className="date">July 11 - 15 | July 25 - 29 | Monday - Friday | 9am - 2pm</p>
            <p>Ballet, Jazz, Theatre, Choreography, Capoeira, Creative Movement, Sewing, and Make-up</p>
            {/* <CampTitle className="sub-title">Intermediate Dance | By Placement Only | $315</CampTitle>
            <p className="date">July 11 - July 15 | Monday - Friday | 9am - 2pm</p>
            <p>
              Ballet, Jazz, Modern, Theatre, Variations, Pre-Pointe, Hip Hip, Tap, Capoeira, Sewing, Make-up, Dance
              History, and Conditioning
            </p> */}

            <CampTitle className="sub-title">Advanced Dance | By Placement Only | $355</CampTitle>
            <p className="date">June 20 - June 24 | Monday - Friday | 9am - 3pm</p>
            <p>
              Ballet, Jazz, Modern, Theatre, Variations, Pointe, Repertoire, Hip Hop, Tap, Capoeira, Composition,
              Pilates, Sewing, Make-up, and Dance History
            </p>

            <CampTitle className="sub-title">
              CMJ Camp (Contemporary, Modern, Jazz) | By Placement Only | $315
            </CampTitle>
            <p className="date">July 18 - 22 | Monday - Friday | 9am - 2pm</p>
            <p>Jazz, Modern, Contemporary, Theatre, Choreography, Repertoire, Improv, and Conditioning</p>
            <DiscountContainer>
              <p className="registration-wave">$15 Registration Fee | Waived for Multi-Student Families</p>
              <p className="bold">10% Discount on Camps when you also enroll in Summer Classes</p>
            </DiscountContainer>

            <p className="title">Summer Dance Classes</p>

            <div className="btn-wrap">
              <a className="bt" href={SummerClassSched} target="_blank" rel="noopener noreferrer">
                <PDFIcon /> SUMMER CLASS schedule
              </a>
            </div>
          </div>
        </div>

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

          </div> */}
        </div>

        <div className="clear" />
        <div className="summer-program-registration-container">
          <div>
            <div id="summer-camps">
              <p className="heading show">Summer Camps 2022</p>
              <p>
                <span className="underline">Camp/Class Combo:</span> 10% off camps when you also enroll in classes
              </p>
              <p>*Discounts will be applied to your account within one week</p>
            </div>
            <div>
              <p className="heading show">Summer Classes | June 13 - August 5, 2022</p>
              <p>8-Week Class Rates (10% Multi-Class Discount applied at time of enrollment)</p>
              <p>*Exploring Ballet 7-Week Class Rate</p>
              <RatesContainer>
                <p className="bold">
                  *Exploring Ballet <span className="bold">$135</span> | 1 hr. 15 min. Class{' '}
                  <span className="bold">$175</span>{' '}
                </p>
                <p className="bold">
                  45-min. Class <span className="bold">$155</span> | 1 hr. 30 min. Class{' '}
                  <span className="bold">$185</span>
                </p>
                <p className="bold">
                  1 hr. Class <span className="bold">$165</span> | 2 hr. Class <span className="bold">$205</span>
                </p>
                <p className="bold">*7-week session begins 6/22</p>
              </RatesContainer>
            </div>
          </div>
          <div>
            {/* <div id="summer-classes">
              <p className="heading show">SSSUMMER CLASSES 2022 (CLASSES &amp; SCHEDULE)</p>
            </div> */}

            <div id="summer-ballet">
              <p className="heading show">BALLET CLASSES</p>
            </div>
            <div id="summer-jazz">
              <p className="heading show">JAZZ, MODERN, and HIP HOP</p>
            </div>
            <div id="summer-pilates">
              <p className="heading show">THEATRE</p>
            </div>
          </div>
          {/* Buttons */}

          <div className="btn-wrap">
            <a className="bt" href={SummerClassSched} target="_blank" rel="noopener noreferrer">
              <PDFIcon /> SUMMER CLASS schedule
            </a>
            {/* <a className="bt" href={SummerCampSched} target="_blank" rel="noopener noreferrer">
              <PDFIcon /> SUMMER CAMP schedule
            </a> */}
            <a className="bt" href={SummerHandout} target="_blank" rel="noopener noreferrer">
              <PDFIcon /> SUMMER HANDOUT
            </a>
          </div>
        </div>
      </div>
    )
  }
}
