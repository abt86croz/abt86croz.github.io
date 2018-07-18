import React from 'react'
import PDFIcon from 'react-icons/lib/fa/file-pdf-o'
import RightArrow from 'react-icons/lib/fa/angle-double-right'
import { Link } from 'react-router-dom'
import { weeklyClasses } from '../data/ClassSchedule'
import './styles/ABTClasses.css'

import FreeClassCupon from '../pdf/free-dance-class-coupon.pdf'
import ClassSchePDF from '../pdf/class-schedule.pdf'

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

const WeeklySchedule = () => (
  <div className="schedule-container">
    <div className="content">
      <div className="data-wrap">
        <Data />
      </div>
    </div>
    <div className="google-class-container">
      <iframe title="ABT Class Schedule" src="https://calendar.google.com/calendar/embed?src=albemarleballettheatre%40gmail.com&ctz=America%2FNew_York" frameBorder="0" scrolling="no" />
    </div>
    <div className="clear" />
    <div className="btn-wrap">
      <a className="btn-sm bt" href={ClassSchePDF} target="_blank" rel="noopener noreferrer"><PDFIcon /> Print Schedule & Registration Form</a>
      <Link to="/classes/description" className="btn-sm bt" href="">Class Descriptions <RightArrow /></Link>
    </div>
  </div>
)

// CLASS DESCRIPTION
const Description = () => (
  <div className="description-container">
    <div className="content">
      <div className="quote-container">
        <p className="italic quote">“If you are looking for a dance instructor for your fledgling child or you are an aspiring professional, Mrs. Sally Hart is the teacher that you want to train with!” - <span className="bold">Linda M. Kuchera-Gage is a former American Ballet Theatre soloist.</span></p>
      </div>
      <p className="heading bold italic">Ballet, Jazz, & Modern Class Descriptions</p>
      <div className="description">
        <p className="sub-title italic">EXPLORING BALLET • Ages 3-4</p>
        <p>An exciting dance program for your preschool child that explores ballet, motor-skills, classroom etiquette, and the imagination. Sally’s unique syllabus teaches ballet fundamentals with a fun, easy to understand method for the preschooler.</p>
        <p>Classes are 45-minutes and 1-hour each, and 1-class maximum per week.</p>
        <p><span className="bold">Girls attire:</span> Pink leotard, Pink tights, Pink ballet slippers.</p>
        <p><span className="bold">Boys attire:</span> Comfortable black shorts or black tights, fitted white tee shirt, black ballet slippers.</p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title italic">BALLET IA • Ages 5 - 6</p>
        <p>Imaginative and rigorous classes that introduces your child to basic barre technique, arm and feet positions, correct body placement, basic center work, coordination and strength.</p>
        <p>Classes are 1-hour each. There is a minimum requirement of 1-class per week and a maximum of 2-classes per week.</p>
        <p><span className="bold">Girls attire:</span> Black leotard, Pink tights, Pink ballet slippers. Maximum class size of 12 students. </p>
        <p><span className="bold">Boys attire:</span> Comfortable black shorts or black tights, fitted white tee shirt, black ballet slippers.</p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title italic">BALLET IB • Ages 7 - 8</p>
        <p>This is the same as Ballet 1A, tailored for this age group. </p>
        <p>Classes are 1-hour each. There is a minimum requirement of 1-class per week, and a maximum of 3-classes per week.</p>
        <p><span className="bold">Girls attire:</span> Black leotard, Pink tights, Pink ballet slippers. Maximum class size of 12 students. </p>
        <p><span className="bold">Boys attire:</span> Comfortable black shorts or black tights, fitted white tee shirt, black ballet slippers.</p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title italic">Open Ballet • Ages 9 to Adult</p>
        <p>This is the same as Ballet 1A, but tailored for older students. It’s never too late to start!</p>
        <p>Classes are 1-hour each. There is a minimum requirement of 1-class per week, and a maximum of 3-classes per week.</p>
        <p><span className="bold">Girls attire:</span> Black leotard, Pink tights, Pink ballet slippers. Maximum class size of 12 students. </p>
        <p><span className="bold">Boys attire:</span> Comfortable black shorts or black tights, fitted white tee shirt, black ballet slippers.</p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title italic">BALLET II • Intermediate</p>
        <p>This multifaceted program is designed to help young dancers expand and enjoy their world of dance. Classes include barre technique, choreography and composition, body placement, jumps, spotting and beginning turns, center work, and Pre-Pointe.</p>
        <p>1 to 2 years of Ballet. Classes are 1-hour each.</p>
        <p><span className="bold">Girls attire:</span> Black leotard, Pink tights, Pink ballet slippers. </p>
        <p><span className="bold">Boys attire:</span> Comfortable black shorts or black tights, fitted white tee shirt, black ballet slippers.</p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title italic" >BALLET III • Intermediate • Pre-Pointe and Pointe</p>
        <p>Fun and rigorous classes that include beginning Pointe work for your dancer includling choreography and composition, body reinforcement, strengthening, placement and alignment, refining footwork, intermediate center work, jumps and turns, plus an introduction to kinesiology.</p>
        <p>Completion of Ballet II or Equivalent, classes are 1-hour each. There is a minimum requirement of 2-classes per week and a maximum of 6-Classes per week.</p>
        <p><span className="bold">Girls attire:</span> Black leotard, Pink tights, Pink ballet slippers. Maximum class size of 12 students. </p>
        <p><span className="bold">Boys attire:</span> Comfortable black shorts or black tights, fitted white tee shirt, black ballet slippers. </p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title italic">ADVANCED BALLET</p>
        <p>Goal oriented, challenging yet fun syllabus is for your advanced dancer and pre-professional. Classes include advanced Pointe work, corps de ballet work, variations, and kinesiology.</p>
        <p>This class is by invitation only and classes are 1-hour each. There is a minimum requirement of 4-classes per week and no maximum on classes. </p>
        <p><span className="bold">Girls attire:</span> Black leotard, Pink tights, Pink ballet slippers. </p>
        <p><span className="bold">Girls attire:</span> Black leotard, Pink tights, Pink ballet slippers. </p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title italic">ADVANCED CONTEMPORARY BALLET CLASS</p>
        <p>Using classical ballet technique and modern dance principles as a foundation, focuses are on choreography, repertoire, floor work, and improvisation.</p>
        <p>This class is by invitation only and classes are two 1-hour classes back to back. There is a minimum requirement of 4-classes per week and no maximum on classes.</p>
        <p><span className="bold">Girls attire:</span> Black leotard, Pink tights, Pink ballet slippers. </p>
        <p><span className="bold">Boys attire:</span> Comfortable black shorts or black tights, fitted white tee shirt, black ballet slippers.</p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title italic">SPECIAL NEEDS BALLET DANCE CLASS • Ages 4 and older</p>
        <p>Students with special needs are welcome to join our regular classes. </p>
        <p>This is available to students who can walk without crutches, walkers, or wheelchairs, and follow multi-step directions.<Link to="/classes/special-needs-dance-class"> Read more...</Link></p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title italic">JAZZ/MODERN BEGINNER & INTERMEDIATE</p>
        <p>A super workout to a mixture of Gus Giordano, and Luigi, Horton, Ailey classical Jazz techniques and the fundamentals of modern dance, drawing on Horton, Taylor, and Cunningham techniques with emphasis on correct placement and attention to transitional steps.</p>
        <p className="italic">&quot;A lot of people insisted on a wall between modern dance and ballet. I&apos;m beginning to think that walls are very unhealthy things.&quot; -Twyla Tharp</p>
        <p>Ballet experience is required and ballet classes may be necessary; subject to the director. Classes are 1-hour each.</p>
        <p><span className="bold">Girls attire:</span> Solid Colored Leotard, Black Jazz Pants or Shorts, Black Jazz shoes.</p>
        <p><span className="bold">Boys attire:</span> Comfortable black bicycle shorts, fitted white tee shirt, Black Jazz Shoes.</p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title italic">ADVANCED JAZZ & CONTEMPORARY CLASS</p>
        <p>This class combines classic jazz technique from Fosse and Luigi styles and incorporates modern and contemporary movement with focus on classic jazz technique, choreography, improvisation, and artistic expression.</p>
        <p>For advanced dancers. Classes are 1.5-hours each until rehearsal season and then 1-hour each.</p>
        <p><span className="bold">Girls attire:</span> Footless tights and Leotard</p>
        <p><span className="bold">Boys attire:</span> Comfortable black bicycle shorts and fitted white tee shirt.</p>
      </div>
      <hr />
      <div className="description">
        <p>Our dance studio is conveniently located in Crozet, near Western Albemarle High School, Henley, Brownsville, and Crozet Elementary Schools, minutes away from Charlottesville, and near Greene County, Nelson County, Orange County and Waynesboro.</p>
        <p className="italic">For more information, email us at <a href="mailto:albemarleballettheatre@gmail.com" target="_top">albemarleballettheatre@gmail.com</a>, or call us at <span className="bold">434.823.8888</span>.</p>
        <p><a href="https://goo.gl/maps/QeM6BCDorfy" target="_blank" rel="noopener noreferrer">Click here for directions to our dance school</a></p>
      </div>
      <a className="bt" href={FreeClassCupon} target="_blank" rel="noopener noreferrer">Try a Free Class<RightArrow /></a>
    </div>
  </div>
)


export { WeeklySchedule, Description }
