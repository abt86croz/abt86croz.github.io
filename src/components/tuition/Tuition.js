import React from 'react'
import './Tuition.css'

const tuitionDiscounts = [
  { numberOfClasses: 'Classes per week', price: 'Rate after discount', id: 1 },
  { numberOfClasses: '1', price: '$298', id: 2 },
  { numberOfClasses: '2', price: '$518', id: 3 },
  { numberOfClasses: '3', price: '$722', id: 4 },
  { numberOfClasses: '4', price: '$920', id: 5 },
  { numberOfClasses: '5', price: '$1,053', id: 6 },
  { numberOfClasses: '6', price: '$1,185', id: 7 },
  { numberOfClasses: '7', price: '$1,317', id: 8 },
  { numberOfClasses: '8', price: '$1,450', id: 9 },
  { numberOfClasses: '9', price: '$1,581', id: 10 },
  { numberOfClasses: '10', price: '$1,653', id: 11 },
]

const GenerateTuitionDiscountTable = () => {
  return tuitionDiscounts.map((o) => {
    return (
      <div className="flexbox" id={`id${o.id}`} key={o.id.toString()}>
        <div className="leftRow">{o.numberOfClasses}</div>
        <div className="rightRow">{o.price}</div>
      </div>
    )
  })
}

/* eslint-disable max-len */
const Tuition = () => (
  <div className="tuition-container">
    <div className="content">
      <p className="sub-title bold">2018-2019 School Year Classes </p>
      <p>
        All classes are $298/semester before multi-class discounts. Because all
        classes are billed monthly, class prices are listed as $74.50 per month
        in JackRabbit before discounts. This number may be confusing, especially
        for returning students. To understand your tuition per semester, please
        see chart below. This is the total you will pay, which will then be
        broken up into monthly payments, which will vary depending on the number
        of classes offered in a given month, in Jackrabbit. Rates are calculated
        based on 16-week semesters. In previous years we have held 15-week
        semesters.
      </p>
      <p>
        Annual tuition, excluding 8-week sessions and Pilates classes, is billed
        monthly. If you would like to pay in full, please let us know via email.
        Monthly payments are due on the 10th of each month for the following
        month’s tuition.
      </p>
      <p>
        Tuition is due in full at the time of registration for 8-Week Sessions
        and Events.
      </p>
      <p>
        ABT requires a credit or debit card to be kept on file at the time of
        registration. All payment information is completely secure through
        SafeSave Payments. If another form of payment (cash, check, or alternate
        card) is not received by the 10th of the month, your card on file will
        automatically be charged. Any declined forms of payments will carry a
        fee of $25.00. When paying by cash or check, a late fee of $25 will
        automatically be applied to accounts past due, each month incurs a
        separate late fee.
      </p>
      <p>
        ABT accepts: Cash, Checks, Bank Draft, Visa, American Express, and
        MasterCard.
      </p>
      <p>
        If you choose to pay by Bank Draft, please ensure you have
        <span className="underline">sufficient funds</span> in your account! If
        the payment is returned due to insufficient funds, you will be charged a
        fee from SafeSave, your bank, and ABT.
      </p>
      <p>
        When making a payment by cash or check, please include the Dancer‘s
        first and last name in the memo of your check or include a note.
      </p>
      <p className="italic">
        <span className="bold">
          Write checks to Albemarle Ballet Theatre and drop off or mail to:
        </span>
        <br />
        P.O. Box 805 <br />
        Crozet, VA 22932
      </p>
      <div className="table">
        <div className="centerRow center bold">16-Week Semester</div>
        <GenerateTuitionDiscountTable />
      </div>
      <p>
        <span className="underline bold">Mat Pilates</span> <br />
        Drop-in Classes: $15 <br />
        10-Class Card: $120 <br />
        *Drop-in classes are listed under ‘Events’ in the Dancer Portal. <br />
        **Class cards can be purchased in person at ABT.
      </p>
      <p>
        <span className="underline bold">
          Baby & Me Barre, Movement Therapy, Dance With Me & Creative Movement
        </span>
        <br />
        Therapy 8-Week Session: $149 <br />
        *Must be paid in full.<br />
      </p>
    </div>
  </div>
)

export default Tuition
