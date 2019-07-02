import React from 'react'
import styled from 'styled-components'
import Content from '../styles/Content'
import Title from '../styles/Title'
import './Performances.css'
// import springGalaImg from '../../images/site/2019-spring-gala.png'

/* eslint-disable unescaped-entities */
/* eslint-disable max-len */

const Description = styled.div`
  margin-bottom: 10px;
  padding: ${props => (props.primary ? '0 30px 0 20px' : '')};
`

const Show = styled.div`
  padding: 0 30px 0 20px;
  p {
    font-size: 20px;
  }
`

const Location = styled.div`
  padding-bottom: 20px;
  p {
    font-size: 18px;
    padding: 0;
    margin: 0;
  }
`
const Performances = () => (
  <div className="performances-container">
    <div className="bg-image description-img" />
    <Content>
      <Title>Upcoming Performances</Title>
      <hr />
      {/* COMING SOON */}
      {/* <Description>
        <p className="sub-title bold">2019-2020 performance dates coming soon…</p>
      </Description> */}

      <Description>
        <Show>
          <p className="bold underline">
            Nutcracker Community Outreach Performances - participation is voluntary
          </p>
          <Location>
            <p> Monday, December 2, 2019 | 4:30pm </p>
            <p> Crozet Library, Crozet, VA</p>
            <p> Ballet IV - Advanced levels invited to perform</p>
          </Location>
          <Location>
            <p> Wednesday, December 4, 2019 | 3:00pm</p>
            <p> Mountain Side, Crozet, VA</p>
            <p> Ballet IV - Advanced levels invited to perform</p>
          </Location>
        </Show>
      </Description>
      <hr />

      <Description>
        <Show>
          <p className="bold underline">The Nutcracker </p>
          <Location>
            <p> December 7 &amp; 8, 2019</p>
            <p> Saturday: 2:00pm &amp; 5:00pm | Sunday: 2:00pm</p>
            <p> The Wayne Theatre in Waynesboro, VA </p>
          </Location>
        </Show>
      </Description>
      <hr />
      <Description primary>
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
      </Description>
    </Content>
  </div>
)

export default Performances
