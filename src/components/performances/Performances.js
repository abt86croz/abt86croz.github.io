import React from 'react'
import './Performances.css'
import springGalaImg from '../../images/site/2019-spring-gala.png'

/* eslint-disable unescaped-entities */
/* eslint-disable max-len */

// CLASS DESCRIPTION
const Performances = () => (
  <div className="performances-container">
    <div className="bg-image description-img" />
    <div className="content">
      <div className="description">
        <div className="heading">Upcoming Performances</div>
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
        <p className="sub-title bold">Spring Gala Community Outreach Performances:</p>
        <p>Two performances will be scheduled, dates and times TBA</p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title bold">
          May 11th, 2019: Spring Gala
          <span className="sub-title-specs">
            2:00pm & 6:00pm
            <br />
            The Dickinson Theatre at Piedmont Community College <br />
            Charlottesville, VA
          </span>
        </p>
        <img className="spring-gala-img" src={springGalaImg} alt="2019 Spring Gala" />
        <div className="btn-wrap">
          {/* Buy tickets */}
          <a
            className="bt"
            href="http://click4tix.com/abt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Tickets
          </a>
        </div>
      </div>
      <hr />
      <div className="description">
        <p>
          Our dance studio is conveniently located in Crozet, near Western Albemarle High School,
          Henley, Brownsville, and Crozet Elementary Schools, minutes away from Charlottesville, and
          near Greene County, Nelson County, Orange County and Waynesboro.
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
          <a href="https://goo.gl/maps/QeM6BCDorfy" target="_blank" rel="noopener noreferrer">
            Click here for directions to our dance school
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default Performances
