import React from 'react'
import Title from '../styles/Title'
import Button from '../styles/Button'
import Content from '../styles/Content'
import { FinancialContainer, Highlight, ButtonContainer, FinancialAidImage } from './FinancialAidStyles'

/* eslint-disable max-len */
const ScholarshipApplication =
  'https://docs.google.com/forms/d/e/1FAIpQLSdljQFC5Wnq0nip8FG1YkKykFB9N-_-CTUb3uaWwhTXdKsKgQ/viewform'

// const WorkStudyApplication =
//   'https://docs.google.com/forms/d/e/1FAIpQLSfdLcLfl0I8TfsufvqxVEPpjL-sMxe-PQE6tu2YJ2QQri_DkA/viewform'

const FinancialAid = () => (
  <FinancialContainer>
    <FinancialAidImage className="bg-image" />
    <Content>
      <Title>Financial Aid</Title>
      <p>
        Scholarships are provided by Studio For The Performing Arts (SFTPA) a 501(c)3 non-profit organization. The goal
        of SFTPA’s scholarship program is to ensure that all qualifying students, regardless of their economic status
        are given the opportunity to study dance in a professional school. Scholarships are based on financial need.
        Please note that SFTPA only grants partial scholarships.
      </p>
      <Highlight>
        {/* <p>
          ABT offers a limited number of Work-Study positions available to all students. Work-Study may be completed by
          students aged 15-years and older or family members.
        </p> */}
        {/* <p className="bold">Fall semester application deadline: September 1, 2019</p>
        <p className="bold">Spring semester application deadline: December 19, 2019</p> */}
      </Highlight>
      <ButtonContainer>
        <Button href={ScholarshipApplication} target="_blank" rel="noopener noreferrer">
          Scholarship Application
        </Button>
        {/* <Button href={WorkStudyApplication} target="_blank" rel="noopener noreferrer">
          Work-Study Application
        </Button> */}
      </ButtonContainer>
    </Content>
  </FinancialContainer>
)

export default FinancialAid
