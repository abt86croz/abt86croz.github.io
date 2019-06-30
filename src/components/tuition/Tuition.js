import React from 'react'
import tuitionDiscounts from './TuitionData'
import Title from '../styles/Title'
import Subtitle from '../styles/Subtitle'
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
import './Tuition.css'

const GenerateTuitionDiscountTable = () => {
  return tuitionDiscounts.map((o) => {
    return (
      <FlexContainer id={`id${o.id}`} key={o.id.toString()}>
        <LeftRow>{o.numberOfClasses}</LeftRow>
        <RightRow>{o.price}</RightRow>
      </FlexContainer>
    )
  })
}

/* eslint-disable max-len */
const Tuition = () => (
  <TuitionContainer>
    <TuitionImage className="bg-image" />
    <div className="content">
      <Title>Tuition</Title>
      <Subtitle className="bold underline">2019-2020 School Year Classes </Subtitle>
      <p>
        The base class rate is $18.62/per class per day, before multi-class discounts. Monthly rates
        are listed as $74.50 in the Dancer Portal before multi-class discounts. For tuition
        questions or to request your total tuition per semester, please contact Ashley at{' '}
        <a href="mailto:Ashley@abtdance.org" target="_top">
          Ashley@abtdance.org
        </a>
        . Please note that monthly rates will vary depending on the number of classes offered in a
        given month.
      </p>

      <Table>
        <CenterRow>Multi-Class Discounts</CenterRow>
        <GenerateTuitionDiscountTable />
      </Table>

      <TuitionClass>
        <span>Mat Pilates</span>
        1-Month Sessions: $15 per class
      </TuitionClass>

      <TuitionClass>
        <span>Dance With Me &amp; Creative Movement</span>
        8-Week Session: $149
      </TuitionClass>

      <TuitionClass>
        <span>Adult Drop-Ins/Class Cards</span>
        Adults may be eligible for drop-in rates in classes that already have a minimum number of
        required enrolled students to run the class. Please inquire about eligibility by emailing{' '}
        <a href="mailto:Ashley@abtdance.org" target="_top">
          Ashley@abtdance.org
        </a>
        . All drop-in students must complete online registration and have a card on file. Please
        notify Ashley via email prior to attending a class. Class fees will be added to your account
        and charged within 24-hours of class.
        <br /> Single Class: $20 <br /> 2-Hour Classes: $32
      </TuitionClass>

      <p>
        <span className="underline">
          Please note that you are automatically enrolled in monthly auto-pay when you complete
          online registration for annual classes
        </span>
        . After the first tuition payment/deposit (made by the registrant), all subsequent monthly
        payments will be made via auto-pay, unless the ABT office has been notified of another
        preferred form of payment. Tuition will be posted on the 1st of the month and cards on file
        will be charged on the 15th for the following month’s tuition.
      </p>

      <p>
        Tuition is due in full at the time of registration for Pilates, 8-Week Sessions, and Events.
      </p>
    </div>
  </TuitionContainer>
)

export default Tuition
