import React, { Component } from 'react'
import styled from 'styled-components'
import postscribe from 'postscribe'

import PDFIcon from 'react-icons/lib/fa/file-pdf-o'
import SummerClassSched from '../../pdf/Summer2023-Schedule.pdf'
import SummerHandout from '../../pdf/summer-handout.pdf'
// import SummerCampSched from '../../pdf/2020-summer-camp-schedule.pdf'
import SummerPoster from '../../images/site/summer/summer-2023.png'
import './SummerProgram.css'
import SummerButtons from './SummerButtons'

const CampTitle = styled.p``

const Container = styled.div`
  margin-bottom: 40px;
`

const DiscountContainer = styled.div`
  text-align: center;
`

/* eslint-disable max-len */
export default class SummerProgramContents extends Component {
  componentDidMount() {
    const summerClasses =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=Summer%20Classes&hidecols=Tuition,Class%20Starts,Gender,Ages,EndDate,Session,openings&sort=Class"></script>'
    const summerCamps =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=summer%20camp&hidecols=Gender,Tuition,Ages,EndDate,Session,Openings,Class%20Starts&sort=age,times"></script>'
    // const balletClassesSummer =
    // '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&amp;Cat1=Summer%20Classes&Cat3=Ballet&hidecols=Gender,tuition,Ages,EndDate,Session,openings,Class%20Starts&amp;sort=Times"></script>'
    const summerStockPerformance =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=summer%20stock&hidecols=Gender,Tuition,Ages,EndDate,Session,Openings,Class%20Starts&sort=age,times"></script>'
    //  postscribe('#summer-classes', summerClasses)
    postscribe('#summer-camps', summerCamps)
    postscribe('#summer-stock-performance', summerStockPerformance)
    postscribe('#summer-classes', summerClasses)
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
            <p className="title">Camps</p>
            <Container>
              <CampTitle className="sub-title">Exploring Ballet | Ages 3-5</CampTitle>
              <p className="date">June 19 - 22 | July 24 - 27 | Monday - Thursday | 10am - 12pm | $200</p>
              <p>
                A young dancer’s very first peek at classical ballet! This camp teaches ballet technique, flexibility,
                coordination, balance, creative movement and games, and stories of the classical ballets. The dancers
                decorate their own costumes (that they keep after the camp) and share a demonstration on the last day.
                Craft supplies and snacks are included.
              </p>
              <CampTitle className="sub-title">Beginner Dance | Ages 5+</CampTitle>
              <p className="date">June 26 - 30 | July 10 - 14 | Monday - Friday | 9am - 2pm | $335</p>
              <p>
                Students will have a variety of daily classes including Ballet, Jazz, Tap, Modern, Theatre,
                Choreography, Crafts, and Sewing.
              </p>
              <CampTitle className="sub-title">
                CMJ Camp (Contemporary, Modern, Jazz) | Previous Dance Experience Required | Ages 8+
              </CampTitle>
              <p className="date">July 17 - 21 | Monday - Friday | 9am - 2pm | $335</p>
              <p>Jazz, Modern, Contemporary, Theatre, Choreography, Repertoire, Improv, and Conditioning</p>
            </Container>
            <Container>
              <p className="title">Summer Stock Performance</p>
              <CampTitle className="sub-title">IIIB - Advanced II | $250</CampTitle>
              <p className="date">Performances August 19 & 20</p>
              <p>
                Performances August 19 & 20 Students in levels III-Advanced are invited to participate in our inaugural
                Summer Stock Performances on August 19th & 20th. Dancers will have the opportunity to perform classical
                ballet repertoire and selections from iconic Broadway musicals and jazz productions. Rehearsals will
                take place on weeknights after regularly scheduled classes.
              </p>
            </Container>

            <Container>
              <DiscountContainer>
                <p className="registration-wave">$20 Registration Fee | Waived for Multi-Student Families</p>
                <p className="bold">10% Discount on Camps when you also enroll in Summer Classes</p>
              </DiscountContainer>
            </Container>

            <div className="clear" />
            <Container>
              <div className="btn-wrap">
                <a className="bt" href={SummerHandout} target="_blank" rel="noopener noreferrer">
                  <PDFIcon /> SUMMER HANDOUT
                </a>

                <a className="bt" href={SummerClassSched} target="_blank" rel="noopener noreferrer">
                  <PDFIcon /> SUMMER CLASS schedule
                </a>
              </div>
            </Container>
          </div>
        </div>

        <Container>
          {/* Tables */}
          {/* <SummerProgramTable /> */}
        </Container>
        <div className="clear" />
        <div className="summer-program-registration-container">
          <div>
            <div id="summer-camps">
              <p className="heading show">SUMMER CAMPS</p>
            </div>
            <div id="summer-stock-performance">
              <p className="heading show">SUMMER STOCK PERFORMANCE</p>
            </div>
            <div id="summer-classes">
              <p className="heading show">SUMMER CLASSES</p>
              <p>See Handout for tuition rates</p>
            </div>
          </div>
          {/* Buttons */}
          <SummerButtons />
        </div>
      </div>
    )
  }
}
