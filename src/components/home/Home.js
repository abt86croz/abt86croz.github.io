import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { HomeBtn1, HomeBtn2, HomeBtn3, HomeBtn4 } from '../Images'
import HandbookDoc from '../../pdf/2018-2019-handbook-policies.pdf'

const handlePoliciesClick = () => {
  window.open(HandbookDoc, '_blank')
}

/* eslint-disable max-len */
const Home = () => (
  <div className="home-container">
    <div className="wrap">
      <a
        className="go-to-registration"
        href="https://app.jackrabbitclass.com/regv2.asp?id=534011"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="home-img" />
      </a>
    </div>

    <div className="image-links">
      <div className="img-link new-classes">
        <Link to="/classes/description">
          <HomeBtn1 />
        </Link>
      </div>
      <div className="img-link calendar">
        <Link to="/classes/schedule">
          <HomeBtn2 />
        </Link>
      </div>
      <div className="img-link performances">
        <Link to="/performances">
          <HomeBtn3 />
        </Link>
      </div>
      <div className="img-link handbook-policies">
        <Link to="" onClick={handlePoliciesClick}>
          <HomeBtn4 />
        </Link>
      </div>
    </div>

    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/bgSMpRpObCg?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=0&amp;loop=1&amp;playlist=bgSMpRpObCg"
        frameBorder="0"
        allow="encrypted-media"
      />
    </div>
    <div className="jack-rabbit-img" />
  </div>
)

export default Home
