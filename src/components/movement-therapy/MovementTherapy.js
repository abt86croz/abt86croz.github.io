import React from 'react'
import { MovementTherapyImage } from '../Images'
import './MovementTherapy.css'


/* eslint-disable max-len */

const MovementTherapy = () => (
  <div className="movement-therapy-container">
    <div className="bg-image movement-img" />
    <div className="content">
      <p>
        Our Movement Therapy Through Dance class is for ages 2 – 6. It is a
        creative movement and dance class for those with all levels of attention
        and ability that utilizes games, songs, and stories to strengthen both
        hemispheres of the brain and target gross motor skill development by
        combining movement, visual stimulation, patterns, rhythm, and sequence.
        This promotes and supports physical and emotional health, improves
        self-confidence, encourages creativity and imagination, and the ability
        to express emotions.
      </p>
      <p>
        Albemarle Ballet Theatre teaches Movement Therapy to children with
        special needs in the Albemarle County and surrounding area. We welcome
        students of all physical abilities to take this class!
      </p>
      <p>
        During the 1970’s Sally taught ballet to children with Down Syndrome
        while she attended W.T. Woodson High School in Fairfax Virginia. Sally
        Hart says,
        <span className="italic">
          “I love to see how excited the children get when something clicks, the
          tiniest things mean so much to them, and it’s just so rewarding for
          me.”
        </span>
      </p>
      <p>
        <MovementTherapyImage />In the mid-1990’s, when Sally began teaching
        again in Afton, she took on a student with Cerebral Palsy. Her mother,
        Anna Rossberg, has never forgotten Sally’s response to her desire for
        ballet classes for her daughter Molly,
        <span className="italic">
          “Everyone has something to overcome, in Molly’s case it’s just more
          obvious.”
        </span>
      </p>
      <p>
        Molly went on to perform in the spring production and the Rossberg’s
        <span className="italic">
          “will always remember Molly dancing across the stage as a fairy.”
        </span>
        Anna says,
        <span className="italic">
          “Sally helped boost her self-confidence and made her feel like a
          normal kid. Her physical limitations just weren’t an issue.”
        </span>
      </p>
      <p>
        One parent with two children in this class said,
        <span className="italic">
          “Sally allows a mother of a child with special needs to feel an
          overwhelming feeling of peace and serenity as the mother observes the
          love, patience and grace exhibited between her child and Sally as they
          dance together.”{' '}
        </span>
        On the way to the car from class my girls would ask me,
        <span className="italic">
          “how much longer until our next class mommy?”
        </span>
      </p>
      <p>
        For more information, please call us at
        <span className="phone-number">
          <a href="tel:+1-434-823-8888" target="_top">
            {' '}
            434.823.8888{' '}
          </a>
        </span>
        or email us at
        <a href="mailto:albemarleballettheatre@gmail.com" target="_top">
          {' '}
          albemarleballettheatre@gmail.com{' '}
        </a>
      </p>
    </div>
    <div className="clear" />
  </div>
)
export default MovementTherapy
