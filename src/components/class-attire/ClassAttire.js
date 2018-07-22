import React from 'react'
import classAttireData from './ClassAttireData'
import './ClassAttire.css'
/* eslint-disable max-len */
const ClassAttireContent = () => {
  return classAttireData.map((o) => {
    return (
      <div key={o.id}>
        <p className="sub-title bold">{o.title}</p>
        <div>
          <span className="underline row-1">{o.girls.attire}:</span>
          <span className="row-2 girls">{o.girls.description}</span>
        </div>
        <div className="block">
          <span className="underline row-1">{o.boys.attire}:</span>
          <span className="row-2">{o.boys.description}</span>
        </div>
      </div>
    )
  })
}

const ClassAttire = () => (
  <div className="class-attire-container">
    <div className="content">
      <p className="title bold">Class Attire</p>
      <p className="italic">
        Hair should be worn up in a neat bun. Dancers with short hair must pin
        back bangs or wear a headband. Remove all jewelry other than stud
        earrings. Please wear clean dance clothes in good repair.
      </p>
      <ClassAttireContent />
    </div>
  </div>
)

export default ClassAttire
