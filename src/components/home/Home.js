import React from 'react'
// import { HomeImage } from '../Images'
import './Home.css'

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
        <div className="home-img">
          <span className="quote">
            “Serving Crozet and the arts since 2005“
          </span>
        </div>
      </a>
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
