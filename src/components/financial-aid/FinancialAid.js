/* eslint-disable quotes */
/* eslint-disable semi */
import React from "react";
import Title from "../styles/Title";
import Button from "../styles/Button";
import Content from "../styles/Content";
import { FinancialContainer, Highlight, ButtonContainer, FinancialAidImage } from "./FinancialAidStyles";

/* eslint-disable max-len */
const ScholarshipApplication =
  "https://docs.google.com/forms/d/e/1FAIpQLSdljQFC5Wnq0nip8FG1YkKykFB9N-_-CTUb3uaWwhTXdKsKgQ/viewform";

const WorkStudyApplication =
  "https://docs.google.com/forms/d/e/1FAIpQLSfdLcLfl0I8TfsufvqxVEPpjL-sMxe-PQE6tu2YJ2QQri_DkA/viewform";

const FinancialAid = () => (
  <FinancialContainer>
    <FinancialAidImage className="bg-image" />
    <Content>
      <Title>Financial Aid</Title>
      <p>
        Scholarships are provided by Studio For The Performing Arts (SFTPA) a 501(c)3 non-profit organization. The goal
        of SFTPA’s scholarship program is to ensure that all students are given the opportunity to study dance in a
        professional school. Scholarships are based on financial need. Please note that SFTPA only grants partial
        scholarships.
      </p>
      <Highlight>
        <p>
          ABT offers a limited number of Work-Study positions, subject to availability and a trial period of one month.
          Work-Study may be completed by students aged 14-years and older, or a family member, and a parent may be
          required to be present.
        </p>
      </Highlight>
      <ButtonContainer>
        <Button href={ScholarshipApplication} target="_blank" rel="noopener noreferrer">
          Scholarship Application
        </Button>
        <Button href={WorkStudyApplication} target="_blank" rel="noopener noreferrer">
          Work-Study Application
        </Button>
      </ButtonContainer>
    </Content>
  </FinancialContainer>
);

export default FinancialAid;
