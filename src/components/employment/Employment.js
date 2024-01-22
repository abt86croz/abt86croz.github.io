/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable semi */
import React from "react";
import Title from "../styles/Title";
import Content from "../styles/Content";
import { EmploymentContainer, EmploymentImage } from "./EmploymentStyles";

const Employment = () => (
  <EmploymentContainer>
    <EmploymentImage className="bg-image" />
    <Content>
      <Title>Employment Opportunities</Title>
      <Title className="underline">Albemarle Ballet Theatre </Title>
      <p className="title bold center">Intermediate-Advanced Ballet Teacher</p>
      <p>
        Substantial hours available and competitive pay based on experience. Optional administrative work with the
        position. Professional experience preferred.
      </p>
      <p>
        Seeking a seasoned teacher demonstrating a vast knowledge and understanding of technique, excellent time
        management skills, and classroom management. Position may include ballet, pointe, choreography, and rehearsal
        coaching. Bonus if experienced in teaching jazz and modern, but not required.{" "}
      </p>
      <p>Please include a link to videos of teaching or choreography, if available. </p>
      <Title className="underline">Studio for the Performing Arts </Title>
      <p className="title bold center">Part-time Non-Profit Administrator</p>
      <p>20 hours per week, a mix of remote and onsite.</p>
      <p>A background in dance is required. Hourly pay based on experience.</p>
      <p>
        Responsibilities include fundraising, grant research and writing, spearheading a new donor program, managing
        donor database, organizing parent volunteer program for performances, updating the website, filing, and other
        administrative tasks. Must be highly proficient in computer work, Google Suite (docs, sheets, and calendar), and
        Microsoft Office (Word and Excel) and have experience working for nonprofits and grant writing.{" "}
      </p>
      <p className="title bold center">Costumer/Tailor </p>
      <p>
        Seasonal work (February - May & September - December). Must have extensive experience working with costumes.
        Competitive hourly pay, based on experience.
      </p>
      <p>
        Responsibilities include alterations, repairs, costume fittings, labeling, organization, inventory, and cleaning
        costumes.
      </p>
      <p>
        For all positions, please email a resume with references to{" "}
        <a href="mailto:Nicky@abtdance.org" target="_top">
          Nicky@abtdance.org
        </a>
      </p>
    </Content>
  </EmploymentContainer>
);

export default Employment;
