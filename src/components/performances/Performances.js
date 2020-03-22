import React from 'react'
import styled from 'styled-components'
import Content from '../styles/Content'
import Title from '../styles/Title'
// import StoryImg from '../../images/site/step-into-story.png'
// import NutImg from '../../images/site/nutcracker-ticket.png'
// import StepIntoStoryIMG from '../../images/site/StepIntoTheStory.png'

// import PayPalNutCracker from '../paypal/Paypal'
import './Performances.css'

// import springGalaImg from '../../images/site/2019-spring-gala.png'

/* eslint-disable unescaped-entities */
/* eslint-disable max-len */


const Description = styled.div`
  hr {
    margin: 0;
  }
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
      <Description primary>
        <p className="bold center">
          Presented by Studio For The Performing Arts with the students of Albemarle Ballet Theatre
        </p>
      </Description>

      <hr />
      {/* COMING SOON */}
      {/* <Description>
        <p className="sub-title bold">2019-2020 performance dates coming soon…</p>
      </Description> */}

      {/* Coming Back in some point
      <Description>
        <Show>
          <p className="bold underline">Nutcracker Community Outreach Performances</p>
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
        <hr />
      </Description>

      <Description>
        <Show>
          <p className="bold underline">The Nutcracker </p>
          <Location>
            <a
              href="https://waynetheatre.ticketforce.com/eventperformances.asp?evt=142"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={NutImg} alt="The Nutcracker Performances" />
            </a>
          </Location>
        </Show>
        <hr />
      </Description>

      <Description>
        <Show>
          <p className="bold underline">‘Step Into The Story’ Nutcracker Series</p>
          <Location>
            <img src={StoryImg} alt="Step Into The Story Performances" />
          </Location>
          <PayPalNutCracker />
        </Show>
        <hr />
      </Description>
*/}

      <Description>
        <Show>
          <p className="bold underline">Exploring Ballet &amp; Ballet IA In-Studio Presentations</p>
          <Location>
            <p>May 3, 2020, | Times TBA </p>
          </Location>
        </Show>
        <hr />
      </Description>

      <Description>
        <Show>
          <p className="bold underline" style={{ color: 'red' }}>
            ** Spring Gala Has been Canceled **
          </p>
          <Location>
            <p>Saturday, May 9, 2020 | 2:00pm &amp; 6:00pm</p>
            <p>The Dickinson Theatre at Piedmont Community College, Charlottesville, VA </p>
          </Location>
          <Location>
            {/* <a href="https://v6.click4tix.com/event-details.php?e=431204" target="_blank" rel="noopener noreferrer">
              <img src={StepIntoStoryIMG} alt="The Nutcracker Performances" />
            </a> */}
          </Location>
        </Show>
        <hr />
      </Description>

      <Description>
        {/* <Show>
          <p className="bold underline">Spring Gala Community Outreach Performances</p>
          <Location>
            <p>Monday, April 27, 2020 | 5:00pm </p>
            <p>Crozet Library, Crozet, VA </p>
            <p>Ballet IV - Advanced levels invited to perform </p>
          </Location>

          <Location>
            <p>Monday, April 29, 2020 | 4:00pm </p>
            <p>The Lodge at Old Trail, Crozet, VA </p>
            <p>Ballet IV - Advanced levels invited to perform </p>
          </Location>
        </Show> */}
        {/* <hr /> */}
      </Description>

      <Description primary>
        <p>
          Our dance studio is conveniently located in Crozet, near Western Albemarle High School, Henley, Brownsville,
          and Crozet Elementary Schools, minutes away from Charlottesville, and near Greene County, Nelson County,
          Orange County and Waynesboro.
        </p>
        <p className="italic">
          For more information: <br /> email us at
          <a href="mailto:Info@abtdance.org" target="_top">
            <span> Info@abtdance.org</span>
          </a>
          , or call us at
          <a href="tel:+1-434-823-8888">
            <span> (434) 823-8888</span>
          </a>
          .
        </p>
        <p>
          <a href="https://goo.gl/maps/QeM6BCDorfy" target="_blank" rel="noopener noreferrer">
            Click here for directions.
          </a>
        </p>
      </Description>
    </Content>
  </div>
)

export default Performances
