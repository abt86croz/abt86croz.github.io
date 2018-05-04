import React from 'react'
import PDFIcon from 'react-icons/lib/fa/file-pdf-o'
import SummerRegistrationForm from '../pdf/2018SummerRegistration.pdf'
import './styles/SummerProgram.css'
import { SummerPosterImage } from './Images'

/* eslint-disable max-len */
const SummerProgram = () => (
  <div className="summer-program-container">
    <div className="summer-poster">
      <SummerPosterImage />
    </div>
    <div className="summer-content-wrap">
      <div className="summer-content">
        <p className="title">Summer Camp and Class Descriptions</p>
        <p className="sub-title">Exploring Ballet - Ages 3-5</p>
        <p className="date">August 6 - 9</p>
        <p>A young dancer&apos;s very first peek at classical ballet! This camp teaches ballet technique, flexibility, coordination, balance, creative movement and games, and stories of the classical ballets. The dancers decorate their own costumes (that they keep after the camp), and share a demonstration recital on the last day. Craft supplies & snacks are included.</p>
        <p className="sub-title">* The Young Dancer Camp - Ages 5-7 and 8+</p>
        <p className="date">July 9 - 13  &  July 16 - 20</p>
        <p>These well-rounded camps are for the young dancer that would like to explore and experience the world of ballet and dance. They offer ballet technique, jazz, modern, theatre, tango, Pilates, stretching, stage make-up, and sewing.</p>
        <p className="sub-title"> * Dance Conservatory: Intermediate and Advanced/Pre-Professional</p>
        <p className="date">July 23 - 27  &  July 30 - August 3</p>
        <p>For dancers that would like to fully immerse themselves in the world of ballet and dance, and take a more serious step with their training. These camps offer ballet technique, pointe*, variations, jazz, modern, character, theatre, social dancing, Pilates, stretching, and stage make-up.
        * For dancers who are already en pointe prior to signing up for the camp.Dancers who are not yet dancing en pointe may take the pointe classes as pre - pointe, and will gain strength in preparation for pointe work.</p>
      </div>
    </div>
    <div className="summer-schedule">
      <div className="column-1">
        <p className="head">Classes</p>
        <p>Beginner Jazz/Modern • Beginners Welcome</p>
        <p>Ballet IA/B • Ages 5 to 7 • Beginners Welcome</p>
        <p>Ballet IB/C • Ages 8 & Older • Beginners Welcome</p>
        <p>Intermediate Jazz/Modern</p>
        <p>Ballet II • Intermediate Classes</p>
        <p>Ballet III • Intermediate Classes<br />Pre-Pointe & Beg Pointe</p>
        <p>Advanced Ballet • 2+ Years Pointe Experience</p>
        <p className="head">Camps</p>
        <p>Exploring Ballet Camp for Preschool • Ages 3 - 4</p>
        <p>The Young Dancer Camp • Ages 5 - 7 </p>
        <p>The Young Dancer Camp  • Ages 8 - 10</p>
        <p>Dance Conservatory Intensive • Intermediate</p>
        <p>Dance Conservatory Intensive • Advanced & Pre-Prof.</p>
      </div>
      <div className="column-2">
        <p className="head">Dates & Times</p>
        <p>Tuesday 4:30 to 5:30pm • 6/19-7/31</p>
        <p>Tuesday 5:30 to 6:30pm • 6/19-7/31</p>
        <p>Tuesday 6:30 to 7:30pm • 6/19-7/31</p>
        <p>Thursday 4:30 to 5:30pm • 6/21-8/2 </p>
        <p>Thursday 5:30 to 6:30pm • 6/21-8/2</p>
        <p>Monday 4:45-6:45pm & Thursday 6:45-8:45pm •6/18 - 8/9</p>
        <p>Monday 6:45-8:45pm & Wednesday 5:00-7:00pm • 6/18 - 8/8</p>
        <p className="head">Dates & Times</p>
        <p>August 6-9 • Mon-Thurs 10am-12pm</p>
        <p>July 9-13 • Mon-Fri 9am-3pm</p>
        <p>July 16-20 • Mon-Fri 9am-3pm</p>
        <p>July 23-27 • Mon-Fri 9am-4pm</p>
        <p>July 30 to August 3 • Mon-Fri 9am-4pm</p>
      </div>
    </div>
    <div className="clear" />
    <div className="btn-wrap">
      <a className="bt" href={SummerRegistrationForm} target="_blank" rel="noopener noreferrer"><PDFIcon /> Registration Form</a>
    </div>
  </div>
)

export default SummerProgram
