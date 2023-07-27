/* eslint-disable react/no-unescaped-entities */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Content from "../styles/Content";
import Title from "../styles/Title";
import StoryImg from "../../images/site/2023onceupontime.png";
import StepIntoStoryImg from "../../images/site/2023step-into.png";
// import NutImg from '../../images/site/nutcracker.png'
// import StepIntoStoryIMG from '../../images/site/spring-gala.png'
import PaypalButtonIMG from "../../images/site/dancer-paypal.png";

// import PayPalNutCracker from '../paypal/Paypal'
import { SummerShowPaypal } from "../paypal/Paypal";
import "./Performances.css";

// import springGalaImg from '../../images/site/2019-spring-gala.png'

/* eslint-disable unescaped-entities */
/* eslint-disable max-len */

const Description = styled.div`
  padding: ${(props) => {
    return props.primary ? "20px 30px 0 20px" : "30px 20px";
  }};
`;

const Show = styled.div`
  padding: 0 20px;
  p {
    font-size: 20px;
  }
`;

const Location = styled.div`
  p {
    font-size: 18px;
    padding: 0;
    margin: 0;
  }
`;

const Divider = styled.div`
  border-bottom: solid 0.3px;
  color: #babcbc;
`;

const BreakPoint = styled.div`
  padding-bottom: var(--medium-padding);
`;

const PaypalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const NutcrackerShows = () => (
  <React.Fragment>
    <Description>
      <Show>
        <p className="bold underline">Step Into The Story: The Nutcracker</p>
        <Location>
          <p>December 3 at 3pm &amp; 5pm</p>
          <p>December 4 at 2pm &amp; 4pm</p>
          <p>ABT’s Whitebox Theater</p>
          <p>$10 General Admission</p>
        </Location>
        <BreakPoint />
        <Location>
          <p>
            Join us for this miniature performance of The Nutcracker! This 30-minute show created for our youngest
            audience members will take place at ABT&#39;s White Box Theatre in an intimate seating arrangement designed
            to be as close to the performers as possible. See Clara, the Sugar Plum Fairy, Russian Baklava, and many
            other beloved characters. Audience members will get to learn steps from the ballet, hold real pointe shoes,
            enjoy a reading of the Nutcracker, and meet the dancers after the performance!
          </p>
          {/* <a href="https://click4tix.com/ABT-MiniNutcracker" target="_blank" rel="noopener noreferrer">
            <img className="ticket-sale-image" src={StoryImg} alt="Step Into The Story Performances" />
          </a> */}
        </Location>
        {/* <PayPalNutCracker />  */}
      </Show>
    </Description>
    <Divider />
    <Description>
      <Show>
        <p className="bold underline">The Nutcracker </p>
        <Location>
          <p>December 15 at 6pm</p>
          <p>December 16 at 2pm</p>
          <p>Waynesboro Highschool Theatre</p>
          <p>$24 Adult | $18 Student/Senior/Veteran</p>
        </Location>
        {/* <Location>
          <a href="https://click4tix.com/ABT-Nutcracker" target="_blank" rel="noopener noreferrer">
            <img className="ticket-sale-image" src={NutImg} alt="The Nutcracker Performances" />
          </a>
        </Location> */}
      </Show>
    </Description>
    <Divider />
  </React.Fragment>
);

const NutcrackerOutreachShows = () => (
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
  </Description>
);

const SpringGalaShows = () => (
  <React.Fragment>
    <Description>
      <Show>
        <p className="bold underline">Step Into The Story: Spring Gala</p>
        <Location>
          <p>April 27 at 3pm &amp; 5pm</p>
          <p>Sunday: 2pm &amp; 4pm</p>
          <p>ABT’s Whitebox Theater</p>
          <p>$10 General Admission</p>
        </Location>
        {/* <Location>
          <a href="http://click4tix.com/ABT-StepIntoTheStory" target="_blank" rel="noopener noreferrer">
            <img className="ticket-sale-image" src={StepIntoStoryImg} alt="Step into the Story: Once Upon a Time" />
          </a>
        </Location> */}
      </Show>
    </Description>
    <Divider />
    <Description>
      <Show>
        <p className="bold underline">Annual Spring Gala</p>
        <Location>
          <p>May 10 at 6pm</p>
          <p>May 11 at 11am &amp; 5pm</p>
          <p>The Dickinson Theatre at Piedmont Community College</p>
          <p>$24 Adult | $18 Student/Senior/Veteran</p>
        </Location>
        {/* <Location>
          We have a limited number of scholarships for All Access tickets! Please fill out the application form to apply{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdZutpNwUJbjcCE6yDzXVfPBtAaJT9GiamuP5Sa2sUGDhRMjw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </Location>
        <Location>
          <a href="http://click4tix.com/ABT-Gala" target="_blank" rel="noopener noreferrer">
            <img className="ticket-sale-image" src={StoryImg} alt="Annual Spring Gala: Once Upon a Time" />
          </a>
        </Location> */}
      </Show>
    </Description>
    <Divider />
  </React.Fragment>
);

const ComingSoonShows = () => (
  <Description>
    <Show>
      <p className="sub-title bold">2022-2023 performance dates coming soon…</p>
    </Show>
  </Description>
);

const SummerShows = () => (
  <React.Fragment>
    <Description>
      <Show>
        <p className="bold underline">Summer Stock Performances</p>
        <Location>
          <p>*FREE* open rehearsal at Grace Estate Tasting Room</p>
          <p>August 18 at 6-7pm</p>
        </Location>
      </Show>
    </Description>
    <Divider />
    <Description>
      <Show>
        <p className="bold underline">ABT Whitebox</p>
        <Location>
          <p>August 19 at 4pm & 6pm</p>
          <p>August 20 at 2pm</p>
          <p>$20 Adult | $15 Student</p>
        </Location>
        <BreakPoint />
        <p>
          Please join us in the intimate setting of ABT's Whitebox Theater for our inaugural Summer Stock Performances!
          This family friendly one hour show features excerpts from the classical ballet Paquita and selections from Bob
          Fosse's iconic repertoire, as well as a spread of delicious catered hor d'oeuvres and wine.
        </p>
      </Show>
      <BreakPoint />
      <PaypalContainer>
        <div>
          <img src={PaypalButtonIMG} alt="Paypal Button" />
        </div>
        <SummerShowPaypal />
      </PaypalContainer>
    </Description>
    <Divider />
  </React.Fragment>
);

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
      <SummerShows />
      <NutcrackerShows />
      <SpringGalaShows />

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
);

export default Performances;
