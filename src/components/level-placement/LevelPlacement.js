import React from 'react'
import Title from '../styles/Title'
import Content from '../styles/Content'
import './LevelPlacement.css'

/* eslint-disable unescaped-entities */

// CLASS DESCRIPTION
const LevelPlacement = () => (
  <div className="level-placement-container">
    <div className="bg-image description-img" />
    <Content>
      <Title>Level Placement Guidelines</Title>
      <div className="description">
        <p>
          Level placement is determined by ABT Owner & School Director, Sally Hart, and Artistic
          Director, Veronica Piller. When placing students we consider age, experience, maturity,
          physical ability, and attendance. Your teachers carefully consider which level will best
          suit each student as we believe that proper placement is crucial to the growth, success,
          and experience of the dancer and their classmates. We consider the entire class dynamic in
          order to create a balanced environment where the students can thrive.
        </p>
        <p>
          We understand that level placement is very personal, and students can feel frustrated and
          impatient when they aren’t placed in the level they had hoped for or weren’t moved up to
          the next level when they expected. Being asked to continue in the same level can be
          frustrating for the dancer, but when we advise this, it is always in their best interest.
          This is not punitive and does not mean the student is not talented or hard working.
          Dancers often spend two years or more in the same level, and this is when we see the most
          growth.
        </p>
        <p>
          If you have questions regarding your level placement, we would be happy to schedule a
          short meeting to discuss your goals and give you further feedback. Please contact{' '}
          <span className="underline">Sally Hart</span> and{' '}
          <span className="underline">Veronica Piller</span>.
        </p>
        <p>Please keep the following points in mind:</p>
        <ol>
          <li>
            <span className="bold">The teacher is always acting in your best interest.</span> Your
            teacher wants you to be confident, successful, and to thrive. There is a reason you were
            placed in a specific level, even if it is not the class you feel you should be in.
          </li>
          <li>
            <span className="bold">Age.</span> The timing of when a girl is permitted to begin
            pointe is essential to her health. In general, no matter how talented the student is,
            she will need to wait to begin pointe until at least between the ages of 10-12 and they
            have achieved the proper level of muscle strength and development and their growth
            plates have closed. Starting pointe before proper strength has been achieved and/or the
            growth plates have closed, can cause lasting physical injury and damage. This is why we
            take the decision of starting a student on pointe very seriously. The proper time to
            purchase pointe shoes is when a student has been given permission by either Sally Hart
            or Veronica Piller.
          </li>
          <li>
            <span className="bold">Advancing in levels.</span> Throughout a dancer’s training they
            will experience being both “the little fish in the big pond” and being “the big fish in
            the little pond”. Both experiences are important. When you start in a new level you will
            be challenged and exposed to new things and will look up to the more advanced dancers.
            Just before you move up, you will find confidence mastering your new skill set, and you
            will have the opportunity to encourage and help the students who are just starting out.
            This cycle is part of your training. If the student moves up too quickly and skips the
            opportunity to feel confident in their achievements, this can negatively impact their
            self- esteem and they can feel overwhelmed.{' '}
          </li>
          <li>
            <span className="bold">
              There is always something you can learn in ballet, even at the most elementary level.
            </span>{' '}
            A good teacher will help you progress no matter the class. Be open to corrections and
            pointers even if you are not in the class you’d like to be in. The best students are
            frequently those who are proactive in their training and can absorb information and
            apply it in their dancing.
          </li>
        </ol>
      </div>

      <hr />
      <div className="description">
        <p>
          Our dance studio is conveniently located in Crozet, near Western Albemarle High School,
          Henley, Brownsville, and Crozet Elementary Schools, minutes away from Charlottesville, and
          near Greene County, Nelson County, Orange County and Waynesboro.
        </p>
        <p className="italic">
          For more information: <br /> email us at
          <a href="mailto:Info@abtdance.org" target="_top">
            <span> Info@abtdance.org</span>
          </a>
          , or call us at
          <a href="tel:+1-434-823-8888">
            <span> (434) 823-8888</span>
          </a>
          .
        </p>
        <p>
          <a href="https://goo.gl/maps/QeM6BCDorfy" target="_blank" rel="noopener noreferrer">
            Click here for directions.
          </a>
        </p>
      </div>
    </Content>
  </div>
)

export default LevelPlacement
