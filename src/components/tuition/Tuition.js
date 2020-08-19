import React from 'react'
import styled from 'styled-components'
/* eslint-disable no-unused-vars */
import { tuitionDiscounts, fallTuitionDiscounts, numberOfWeeks } from './TuitionData'
import Title from '../styles/Title'
import Subtitle from '../styles/Subtitle'
import Content from '../styles/Content'
import {
  TuitionContainer,
  TuitionClass,
  TuitionImage,
  Table,
  FlexContainer,
  LeftRow,
  RightRow,
  CenterRow,
} from './TuitionStyles'

const TableContainerStyled = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  @media (max-width: 667px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const NumberOfStyled = styled.span`
  display: block;
`

const GenerateTuitionDiscountTable = () => {
  return fallTuitionDiscounts.map((o) => {
    return (
      <FlexContainer id={`id${o.id}`} key={o.id.toString()}>
        <LeftRow>{o.numberOfClasses}</LeftRow>
        <RightRow>{o.price}</RightRow>
      </FlexContainer>
    )
  })
}

const GenerateNumberOfWeeksTable = () => {
  return numberOfWeeks.map((o) => {
    return (
      <FlexContainer id={`id${o.id}`} key={o.id.toString()}>
        <LeftRow>{o.numberOfClasses}</LeftRow>
        <RightRow>
          <NumberOfStyled>{o.num1}</NumberOfStyled>
          <NumberOfStyled>{o.num2}</NumberOfStyled>
        </RightRow>
      </FlexContainer>
    )
  })
}

/* eslint-disable max-len */
const Tuition = () => (
  <TuitionContainer>
    <TuitionImage className="bg-image" />
    <Content>
      <Title>Tuition</Title>
      <Subtitle className="bold underline">2020 Fall Semester Classes</Subtitle>
      <p>
        Monthly class rates are based on a 4-week month and are listed below. For tuition questions or to request your
        total tuition per semester, please contact{' '}
        <a href="mailto:Nicky@abtdance.org" target="_top">
          Nicky
        </a>
      </p>
      <p>
        For students taking multiple classes, a 10% discount will be applied for each additional class beyond the first.
      </p>
      <TableContainerStyled>
        <Table>
          {/* <CenterRow>Multi-Class Discounts</CenterRow>
        <GenerateTuitionDiscountTable /> */}
          <CenterRow>Monthly Tuition Rates</CenterRow>
          <GenerateTuitionDiscountTable />
        </Table>
        <Table>
          {/* <CenterRow>Multi-Class Discounts</CenterRow>
        <GenerateTuitionDiscountTable /> */}
          <CenterRow>Number of weeks in Fall Semester</CenterRow>
          <GenerateNumberOfWeeksTable />
        </Table>
      </TableContainerStyled>
      <TuitionClass>
        <span>Mat Pilates</span>
        1-Month Session: $15 per class
      </TuitionClass>
      <TuitionClass>
        <span>Exploring Ballet & Creative Movement</span>
        6-Week Session: $99
      </TuitionClass>
      {/* <TuitionClass>
        <span>Dance With Me &amp; Creative Movement</span>
        8-Week Session: $149
      </TuitionClass> */}
      {/* <TuitionClass>
        <span>Adult Drop-Ins/Class Cards</span>
        Adults may be eligible for drop-in rates in classes that already have a minimum number of required enrolled
        students to run the class. Please inquire about eligibility by emailing . All drop-in students must complete
        online registration and have a card on file. Please notify Ashley via email prior to attending a class. Class
        fees will be added to your account and charged within 24-hours of class.
        <br /> Single Class: $20 <br /> 2-Hour Classes: $32
      </TuitionClass> */}
      <p>
        Annual tuition, excluding 6-week sessions and Pilates classes, is billed monthly. If you would like to pay in
        full, please notify{' '}
        <a href="mailto:Nicky@abtdance.org" target="_top">
          Nicky.
        </a>{' '}
        Tuition will be posted on the 1st of the month and cards on file will be charged on the 15th for the following
        month’s tuition, unless an alternative form of payment is received prior to the 15th.
      </p>
      <p>Tuition is due in full at the time of registration for Pilates, 6-Week Sessions, and Events.</p>
      <p>
        All tuition is non-refundable. If there are extenuating circumstances, please contact{' '}
        <a href="mailto:Nicky@abtdance.org" target="_top">
          Nicky
        </a>
      </p>{' '}
    </Content>
  </TuitionContainer>
)

export default Tuition
