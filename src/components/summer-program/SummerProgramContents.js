/* eslint-disable quotes */
/* eslint-disable semi */
import React, { Component } from "react";
import styled from "styled-components";
import postscribe from "postscribe";

import PDFIcon from "react-icons/lib/fa/file-pdf-o";
import SummerClassSched from "../../pdf/summer-schedule.pdf";
import SummerHandout from "../../pdf/summer-handout.pdf";
// import SummerCampSched from '../../pdf/2020-summer-camp-schedule.pdf'
import SummerPoster from "../../images/site/summer/summer-2023.png";
import "./SummerProgram.css";
import SummerButtons from "./SummerButtons";

const CampTitle = styled.p``;

const Container = styled.div`
  margin-bottom: 40px;
`;

const DiscountContainer = styled.div`
  text-align: center;
`;

/* eslint-disable max-len */
export default class SummerProgramContents extends Component {
  componentDidMount() {
    const summerClasses =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=Summer%20Classes&hidecols=Tuition,Class%20Starts,Gender,Ages,EndDate,Session,openings&sort=Class"></script>';
    const summerCamps =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=summer%20camp&hidecols=Gender,Tuition,Ages,EndDate,Session,Openings,Class%20Starts&sort=age,times"></script>';
    // const balletClassesSummer =
    // '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&amp;Cat1=Summer%20Classes&Cat3=Ballet&hidecols=Gender,tuition,Ages,EndDate,Session,openings,Class%20Starts&amp;sort=Times"></script>'
    const summerStockPerformance =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=summer%20stock&hidecols=Gender,Tuition,Ages,EndDate,Session,Openings,Class%20Starts&sort=age,times"></script>';
    //  postscribe('#summer-classes', summerClasses)
    postscribe("#summer-camps", summerCamps);
    postscribe("#summer-stock-performance", summerStockPerformance);
    postscribe("#summer-classes", summerClasses);
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
              <CampTitle className="sub-title">Exploring Ballet</CampTitle>
              <p className="date">June 17 - 20: Ages 4 - 5 & July 22 - 25: Ages 3 - 4</p>
              <p className="date">M - Th | 10am - 12pm | $225</p>
              <p>
                A young dancer’s very first peek at classical ballet! This camp teaches ballet technique, flexibility,
                coordination, balance, creative movement and games, and stories of the classical ballets. The dancers
                decorate their own costumes (that they keep after the camp) and share a demonstration on the last day.
                Craft supplies and snacks are included.
              </p>
              <CampTitle className="sub-title">Beginner Dance | Ages 6+</CampTitle>
              <p className="date">June 24- 28 & July 8 - 12</p>
              <p className="date">M - F | 9am - 2pm | $350</p>
              <p>Ballet, Jazz, Modern, Theatre, Choreography, Crafts, and Sewing.</p>
              <CampTitle className="sub-title">Intermediate Dance: Ages 9+</CampTitle>
              <p className="date">July 15 - 19</p>
              <p className="date">2 years experience | M - F | 9am - 2pm | $350</p>
              <p>Ballet, Jazz, Modern, Theatre, Repertoire, Improv, Sewing, and Conditioning</p>
            </Container>
            <Container>
              <p className="title">NEW Classes!</p>
              <CampTitle className="sub-title">Variations I & II</CampTitle>
              <p>
                Dancers will learn classical variations and repertoire to be presented at the end of the session.
                Tuition includes a presentation in the Whitebox on August 3, rehearsal costume, warm-up class, and video
              </p>
              <CampTitle className="sub-title">Choreography Workshop</CampTitle>
              <p>
                An accumulative class throughout program. Dancers will learn movement-sourcing skills, music and
                geographical charting, and will work as a group to choreograph a piece that will be presented at the end
                of the session. Tuition includes a presentation in the Whitebox, a rehearsal costume (if needed),
                warm-up class, and a video.
              </p>
              <CampTitle className="sub-title">Sewing & Costume Design</CampTitle>
              <p className="date">Performances August 19 & 20</p>
              <p>
                Sewing & Costume Design Dancers will learn sewing techniques and will recycle old clothing into their
                own costume over the course of the program. Dancers will need to provide their supplies. Ages 8+.
              </p>
            </Container>

            <Container>
              <DiscountContainer>
                <CampTitle className="title">Tuition</CampTitle>
                <p className="registration-wave">$20 Registration Fee | Waived for Multi-Student Families</p>
                <p className="bold">10% Discount on Camps when you also enroll in Summer Classes</p>
                <p className="underline">
                  8-week class rates will be split into 2 payments charged on June and July 1st.{" "}
                </p>
                <p>
                  <strong>30-min:</strong> $155 | <strong>45-min:</strong> $165 | <strong>1 hr:</strong> $175 | {""}
                  <strong>1.25 hr:</strong> $185 | <strong>1.5 hr:</strong> $195
                </p>
                <p>*10% Multi-class discount automatically applied</p>
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
              <p className="heading show">NEW CLASSES!</p>
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
    );
  }
}
