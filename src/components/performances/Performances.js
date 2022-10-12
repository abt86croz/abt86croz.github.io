/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import Content from '../styles/Content'
import Title from '../styles/Title'
import StoryImg from '../../images/site/stepinto.png'
import NutImg from '../../images/site/nutcracker.png'
// import StepIntoStoryIMG from '../../images/site/spring-gala.png'

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
  padding: ${(props) => {
    return props.primary ? '0 30px 0 20px' : ''
  }};
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
        <Show>
          <p className="sub-title bold">2022-2023 performance dates coming soon…</p>
        </Show>
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

    */}
      <Description>
        <Show>
          <p className="bold underline">December 3 &amp; 4 ‘Step Into The Story’ Nutcracker</p>
          <Location>
            <p>The Whitebox Theatre at ABT</p>
            <p>Saturday: 3:00pm and 5:00pm</p>
            <p>Sunday: 2:00pm and 4:00pm</p>
          </Location>
          <Location>
            <a href="https://click4tix.com/ABT-MiniNutcracker" target="_blank" rel="noopener noreferrer">
              <img className="ticket-sale-image" src={StoryImg} alt="Step Into The Story Performances" />
            </a>
          </Location>
          {/* <PayPalNutCracker /> */}
        </Show>
        <hr />
      </Description>

      {/* <Description>
        <Show>
          <p className="bold underline">Exploring Ballet &amp; Ballet IA In-Studio Presentations</p>
          <Location>
            <p>May 3, 2020, | Times TBA </p>
          </Location>
        </Show>
        <hr />
      </Description> */}
      {/* <Description>
        <Show>
          <p className="italic red">
            Online sales have ended. Tickets will be available for purchase at the theater 1-hour prior to each show
          </p>
          <p className="bold center">Spring Gala 2022</p>
          <p>'Carnival of the Animals' and 'Rhapsody'</p>
          <p>Friday, May 6th at 6pm</p>
          <p>Saturday, May 7th at 2pm and 5pm</p>
          <p>The Dickinson Theatre at PVCC in Charlottesville, VA</p>

          <div className="paddingTopLarge">
            <p className="bold">COVID-19 POLICY</p>
            <p>- One seat will be held between each group of patrons for social distancing.</p>
            <p>
              - All audience members are asked to either: present proof of vaccination OR proof of negative Covid test
              within 48-hours upon entry. Paper or digital documentation are both accepted.
            </p>
            <p>- All audience members over the age of 3 will be required to wear a mask.</p>
            <p> - Please arrive 30-minutes prior to the show for check-in.</p>
            <p className="paddingTopMedium">
              We continue to monitor State and CDC guidelines and recommendations. Thank you for understanding and
              supporting these health and safety protocols.
            </p>
          </div>

          {/* <div className="paddingTopLarge">
            <a href="https://v6.click4tix.com/event-details.php?e=431428" target="_blank" rel="noopener noreferrer">
              <img src={StepIntoStoryIMG} alt="2022 ABT Spring Gala Performance" />
            </a>
          </div> */}
      {/* <Location />
        </Show> */}
      {/* </Description> */}
      <Description>
        <Show>
          <p className="bold underline">December 10: The Nutcracker </p>
          <Location>
            <p>Waynesboro Highschool Theatre Waynesboro, VA</p>
            <p>2:00 and 6:00pm</p>
          </Location>
          <Location>
            <a href="https://click4tix.com/ABT-Nutcracker" target="_blank" rel="noopener noreferrer">
              <img className="ticket-sale-image" src={NutImg} alt="The Nutcracker Performances" />
            </a>
          </Location>
        </Show>
        <hr />
      </Description>
      <Description>
        <Show>
          <p className="bold underline">May 12 &amp; 13: Spring Gala </p>
          <Location>
            <p>The Dickinson Theatre at Piedmont Community College Charlottesville, VA</p>
            <p>Times TBA</p>
          </Location>
        </Show>
        <hr />
      </Description>
      <br />
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
