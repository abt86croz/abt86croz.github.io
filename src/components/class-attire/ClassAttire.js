import React from 'react'
import classAttireData from './ClassAttireData'
import './ClassAttire.css'
/* eslint-disable max-len */
const ClassAttireContent = () => {
  return classAttireData.map((o) => {
    return (
      <div key={o.id}>
        <p className="sub-title bold">{o.title}</p>
        <p>
          <span className="underline">{o.girls.attire} </span>
          {o.girls.description}
        </p>
        <p>
          <span className="underline">{o.boys.attire} </span>
          {o.boys.description}
        </p>
      </div>
    )
  })
}

const ClassAttire = () => (
  <div className="class-attire-container">
    <div className="content">
      <p className="title bold">Class Attire</p>
      <p>
        Hair should be worn up in a neat bun. Dancers with short hair must pin
        back bangs or wear a headband. Remove all jewelry other than stud
        earrings. Please wear clean dance clothes in good repair.
      </p>
      <ClassAttireContent />
    </div>
  </div>
)

export default ClassAttire
