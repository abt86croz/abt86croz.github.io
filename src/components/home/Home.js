import React from 'react'
import { Link } from 'react-router-dom'
// import { HashLink as NutLink } from 'react-router-hash-link'
import './Home.css'
import { HomeBtn1, HomeBtn2, HomeBtn3, HomeBtn4 } from '../Images'
import HandbookDoc from '../../pdf/2020-2021-policies.pdf'

const handlePoliciesClick = () => {
  window.open(HandbookDoc, '_blank')
}

const HomeButtonImg = () => (
  <div className="wrap">
    <a
      className="go-to-registration"
      href="https://app.jackrabbitclass.com/regv2.asp?id=534011"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="home-img" />
      {/* <Link to="/classes/summer-program">
          Place .home-img here for summer program
    </Link> */}
    </a>
  </div>
)

//
/* eslint-disable max-len */
const Home = () => (
  <div className="home-container">
    <div className="abt-nutcracker-container" />
    {/* place home button image here */}
    <HomeButtonImg />
    <div className="image-links-wrap">
      <div className="img-link new-classes">
        <Link to="/registration/tuition">
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
        src="https://www.youtube.com/embed/evsz4_AL2Hg?rel=0&amp;controls=1&amp;showinfo=0&amp;autoplay=0&amp;loop=1&amp;playlist=bgSMpRpObCg"
        frameBorder="0"
        allow="encrypted-media"
      />
    </div>
    <div className="jack-rabbit-img" />
  </div>
)

export default Home
