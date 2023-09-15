/* eslint-disable quotes */
/* eslint-disable semi */
import React from "react";
import styled from "styled-components";
/* eslint-disable no-unused-vars */
import { tuitionDiscounts, fallTuitionDiscounts, numberOfWeeks } from "./TuitionData";
import Title from "../styles/Title";
import Subtitle from "../styles/Subtitle";
import Content from "../styles/Content";
import {
  TuitionContainer,
  TuitionClass,
  TuitionImage,
  Table,
  FlexContainer,
  LeftRow,
  RightRow,
  CenterRow,
} from "./TuitionStyles";

const TableContainerStyled = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  @media (max-width: 667px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const NumberOfStyled = styled.span`
  display: block;
`;

const GenerateTuitionDiscountTable = () => {
  return fallTuitionDiscounts.map((o) => {
    return (
      <FlexContainer id={`id${o.id}`} key={o.id.toString()}>
        <LeftRow>{o.numberOfClasses}</LeftRow>
        <RightRow>{o.price}</RightRow>
      </FlexContainer>
    );
  });
};

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
    );
  });
};

/* eslint-disable max-len */
const Tuition = () => (
  <TuitionContainer>
    <TuitionImage className="bg-image" />
    <Content>
      <Title>Tuition</Title>
      <Subtitle className="bold underline">2023 - 2024 School Year</Subtitle>
      <p>
        Tuition can either be paid in full (10% discount) or 8-monthly payments (September – April). New students that
        join after December 15 will automatically be enrolled in a 5-payment plan (January – May). The 5th payment will
        be equal to 50% of your regular monthly payment. Classes that run by session and Summer Camps are billed in
        full. If you would like to pay in full, cash, or check, please email{" "}
        <a href="mailto:Anna@abtdance.org" target="_top">
          Anna Finan
        </a>
        . Tuition will be posted on the 15 th of the month and cards on file will be charged on the 1 st.
      </p>
      <p>
        For students taking multiple classes, a 10% discount will automatically be applied for each additional class
        beyond the first.
      </p>

      <TableContainerStyled>
        <Table>
          {/* <CenterRow>Multi-Class Discounts</CenterRow>
        <GenerateTuitionDiscountTable /> */}
          <CenterRow>* Monthly Tuition Rates</CenterRow>
          <GenerateTuitionDiscountTable />
        </Table>
        <Table>
          {/* <CenterRow>Multi-Class Discounts</CenterRow>
        <GenerateTuitionDiscountTable /> */}
          {/* <CenterRow>Number of weeks in Fall Semester</CenterRow>
          <GenerateNumberOfWeeksTable /> */}
        </Table>
      </TableContainerStyled>
      <TuitionClass>
        <span>Creative Movement Tuition</span>
        7-Week Session: $133
        <br />
        8-Week Session: $152
      </TuitionClass>
      <TuitionClass>
        <span>Tap I Tuition</span>
        7-Week Session: $140
        <br />
        8-Week Session: $160
        <br />
      </TuitionClass>
      {/* DELETE THIS */}
      {/* <TuitionClass>
        <span>Adult Drop-Ins/Class Cards</span>
        Adults may be eligible for drop-in rates in classes that already have a minimum number of required enrolled
        students to run the class. Please inquire about eligibility by emailing . All drop-in students must complete
        online registration and have a card on file. Please notify Ashley via email prior to attending a class. Class
        fees will be added to your account and charged within 24-hours of class.
        <br /> Single Class: $20 <br /> 2-Hour Classes: $32
      </TuitionClass> */}
      <div className="paddingTopLarge" />
      <p>
        Spring registration will be closed after February 15 th . Enrollment for Tap I will be closed after the 2 nd
        week of each session.
      </p>
      <p>
        Registration for Creative Movement and Tap I is per session and tuition is non- refundable once the session has
        started.
      </p>

      <p>
        Registration for all other classes is for the school year August 2023 – May 2024. All students will
        automatically be enrolled in the Spring semester unless we receive notice via email.
      </p>

      <p>
        Please send written notice to{" "}
        <a href="mailto:Anna@abtdance.org" target="_top">
          Anna Finan
        </a>{" "}
        if you wish to withdraw from a class. Students who stop coming to class will continue to be billed until they
        officially withdraw.
        <span className="underline">
          Written notice must be sent before the 15 th of the month to avoid being charged for the following month’s
          tuition.
        </span>
        {""} All tuition is nonrefundable. Notice cannot be retroactive.
      </p>
    </Content>
  </TuitionContainer>
);

export default Tuition;
