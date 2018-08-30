import React from 'react'
import './Performances.css'

/* eslint-disable unescaped-entities */

// CLASS DESCRIPTION
const Performances = () => (
  <div className="performances-container">
    <div className="bg-image description-img" />
    <div className="content">
      <div className="description">
        <div className="heading">Upcoming Performances</div>
        <p className="sub-title bold">
          December 8th, 2018: The Nutcracker
          <span className="sub-title-specs">
            2:00pm & 5:00pm <br />
            The Wayne Theatre <br />
            Waynesboro, VA
          </span>
        </p>
        <p>
          Follow the link below to purchased tickets online: <br />
          <a
            href="http://waynetheatre.org/dec-8-the-nutcracker-presented-by-albemarle-ballet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://waynetheatre.org/dec-8-the-nutcracker-presented-by-albemarle-ballet/
          </a>
        </p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title bold">
          Nutcracker Community Outreach Performances:
          <span className="sub-title-specs">
            Monday, December 3rd, 4:30pm <br />
            Crozet Library <br />
            Ballet III – Advanced only
          </span>
        </p>
        <p>
          * One more Outreach Performance will be scheduled, date and time TBA
        </p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title bold">
          December 15th & 16th: Step Into The Story- Nutcracker
          <span className="sub-title-specs">
            The White Box Theatre at ABT <br />
            Times TBA <br />
            Ballet III – Advanced Only
          </span>
        </p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title bold">
          April 28th, 2019: Exploring Ballet & Ballet IA Only
          <span className="sub-title-specs">
            Studio Showing at ABT <br />
            Times TBA
          </span>
        </p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title bold">
          Spring Gala Community Outreach Performances:
        </p>
        <p>Two performances will be scheduled, dates and times TBA</p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title bold">
          May 11th, 2019: Spring Gala
          <span className="sub-title-specs">
            Two performance times TBA <br />
            The Dickinson Theatre at Piedmont Community College <br />
            Charlottesville, VA
          </span>
        </p>
      </div>
      <hr />
      <div className="description">
        <p>
          Our dance studio is conveniently located in Crozet, near Western
          Albemarle High School, Henley, Brownsville, and Crozet Elementary
          Schools, minutes away from Charlottesville, and near Greene County,
          Nelson County, Orange County and Waynesboro.
        </p>
        <p className="italic">
          For more information: <br /> email us at
          <a href="mailto:albemarleballettheatre@gmail.com" target="_top">
            <span> albemarleballettheatre@gmail.com</span>
          </a>
          , or call us at
          <a href="tel:+1-434-823-8888">
            <span> (434) 823-8888</span>
          </a>
          .
        </p>
        <p>
          <a
            href="https://goo.gl/maps/QeM6BCDorfy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here for directions to our dance school
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default Performances
