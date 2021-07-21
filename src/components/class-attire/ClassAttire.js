import React from 'react'
import classAttireData from './ClassAttireData'
import Content from '../styles/Content'
import Title from '../styles/Title'

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
          <div>
            <span className="underline row-1">{o.boys.attire && `${o.boys.attire}:`}</span>
            <span className="row-2">{o.boys.description && o.boys.description}</span>
          </div>
        </div>
      </div>
    )
  })
}

const ClassAttire = () => (
  <div className="class-attire-container">
    <div className="bg-image class-attire-img" />
    <Content>
      <Title>Class Attire</Title>
      <p className="italic">
        Girls’ hair should be worn up and in a neat bun or french twist. Dancers with short hair must pin back bangs or
        wear a headband. Boys’ hair should be neat and not fall into the eyes, longer hair should be pulled back in a
        ponytail. No jewelry other than stud earrings. Please wear clean dance clothes and shoes in good repair.
      </p>
      <ClassAttireContent />
    </Content>
  </div>
)

export default ClassAttire
