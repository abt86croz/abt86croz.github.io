import React from 'react'
import styled from 'styled-components'
import classAttireData from './ClassAttireData'
import Content from '../styles/Content'
import Title from '../styles/Title'

import './ClassAttire.css'

const ClassAtireType = styled.div``

/* eslint-disable max-len */
const ClassAttireContent = () => {
  return classAttireData.map((o) => {
    return (
      <ClassAtireType key={o.id}>
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
      </ClassAtireType>
    )
  })
}

const ClassAttire = () => (
  <div className="class-attire-container">
    <div className="bg-image class-attire-img" />
    <Content>
      <Title>Class Attire</Title>
      <p className="italic">
        Girls’ hair should be worn up and in a neat bun or French twist. Dancers with short hair must pin back bangs or
        wear a headband. Boys’ hair should be neat and not fall into the eyes, longer hair should be pulled back in a
        ponytail. No jewelry other than stud earrings. Please wear clean dance clothes and shoes in good repair.
      </p>
      <ClassAttireContent />
      <p className="underline">
        Hair for girls in the following styles should be worn securely pulled back in a ponytail:
      </p>
      <div css={'padding-bottom: var(--medium-padding);'} />
      <ClassAtireType>
        <p className="sub-title bold">Jazz/Modern/Contemporary</p>
        <div>
          <span className="underline row-1">Attire:</span>
          <span className="row-2 girls">
            Black jazz pants, tights, or leggings with a plain athletic shirt or leotard without graphics.
          </span>
        </div>
        <div className="block">
          <div>
            <span className="underline row-1">Shoes:</span>
            <span className="row-2">Bare feet for modern. Jazz shoes for jazz. Ballet slippers for contemporary.</span>
          </div>
        </div>
      </ClassAtireType>
      <ClassAtireType>
        <p className="sub-title bold">Hip-Hop</p>
        <div>
          <span className="underline row-1">Attire:</span>
          <span className="row-2 girls">
            Comfortable solid-colored pants and a plain shirt without graphics. Clean sneakers that are worn indoors
            only.
          </span>
        </div>
      </ClassAtireType>
      <ClassAtireType>
        <p className="sub-title bold">Tap</p>
        <div>
          <span className="underline row-1">Attire:</span>
          <span className="row-2 girls">
            Black jazz pants or leggings with a plain leotard, athletic top, or t-shirt without graphics. Tap shoes.
          </span>
        </div>
      </ClassAtireType>
      <br />
      <ClassAtireType>
        <p className="sub-title bold">Solo Social Dance Party</p>
        <div>
          <span className="underline row-1">Attire:</span>
          <span className="row-2 girls">
            Comfortable solid-colored pants and a plain shirt without graphics or Athletic wear.
          </span>
        </div>
        <div className="block">
          <div>
            <span className="underline row-1">Shoes:</span>
            <span className="row-2">
              Supportive, comfortable footwear like light weight sneakers are recommended (leather-soled or hard
              rubber-soled shoes are also suitable but not required) - all shoes must be thoroughly clean and dedicated
              for studio use only.
            </span>
          </div>
        </div>
      </ClassAtireType>
    </Content>
  </div>
)

export default ClassAttire
