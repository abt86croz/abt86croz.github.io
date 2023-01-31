import React from 'react'
import SummerPoster from '../../images/site/summer/summer-2022.png'
import SummerButtons from './SummerButtons'
import './SummerProgram.css'

/* eslint-disable max-len */
const SummerProgramContents = () => {
  return (
    <div className="summer-program-container">
      {/* Poster */}
      <div className="summer-poster">
        <img className="logo-image" src={SummerPoster} alt="abt logo" />
      </div>

      <div className="summer-content-wrap">
        <div className="summer-content" style={{ height: '100vh' }}>
          <p className="title">Summer 2023 Coming Soon!</p>
          <br />
          <p> Enrollment for current students opens February 1st</p>
          <p>Registration opens for new students February 14</p>
        </div>
      </div>

      <div className="clear" />
      <SummerButtons />
    </div>
  )
}

export default SummerProgramContents
