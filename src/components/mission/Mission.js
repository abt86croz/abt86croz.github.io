
import React from 'react'
import { Link } from 'react-router-dom'
import RightArrow from 'react-icons/lib/fa/angle-double-right'
import './Mission.css'

/* eslint-disable max-len */
const Mission = () => (
  <div className="mission-container">
    <div className="bg-image mission-img" />
    <div className="content">
      <p className="title bold">Our Philosophy</p>
      <p>
        Albemarle Ballet Theatre (ABT) was established in downtown Crozet in
        2005 to bring high quality, affordable dance instruction to students of
        all backgrounds and skill levels. The mission of this family-owned
        business is to provide a fun, creative, and nurturing environment for
        your child.
      </p>
      <p>
        We carefully select dance instructors with professional training and
        company experience. Our instructors are seasoned and teach correct
        technique, cross training, proper use of anatomy, dramatic ability, and
        encourage a healthy self-image and lifestyle. We strive to encourage and
        motivate our students to work hard and achieve their best. Our teachers
        are excellent role models who help develop and nurture strong character
        and self confidence.
      </p>
      <p>
        Whether your child dances recreationally or has professional
        aspirations, they have fun and receive the attention they need and
        deserve. Our goal is to help your child become exemplary dancers,
        academic students, and people.
      </p>
      <p>
        If you are transferring from another school, we understand that can be
        uncomfortable and moving to a new town can be daunting. We‘ve built a
        wonderful community here at Albemarle Ballet Theatre to help make your
        child feel right at home. We will work with you to find the right
        classes, so they find comfort in their new dance school.
      </p>
      <p className="bold title">Our Space</p>
      <p>
        Located in the historic Fruit-Growers Co-op building at the intersection
        of Crozet Avenue and Three Notch’d Road, our studio is convenient for
        residents of Western Albemarle County, Charlottesville, and Augusta
        County.
      </p>
      <p>
        ABT’s professional facilities include a large studio equipped with fifty
        feet of mirrored wall, professional barres, and Stage Step sprung
        floors. Two mirrored doors offer you the freedom to watch class, and the
        space transitions into a white box theatre for staging productions. The
        building’s HVAC system allows dancers to move safely and comfortably
        throughout all four seasons. Our second floor spaces offers privacy and
        Blue Ridge Mountain views, making it the perfect home for our school.
      </p>
      <p className="small italic center">
        “ABT is a truly unique dance studio I sought it out for my 2 daughters
        because I wanted expert instruction in a low-key environment. I have not
        been disappointed. In the past 3 years, I have watched my daughter gain
        confidence, skill and poise and was awed by her performance in the
        annual spring show. The spring production showcased ABT’s one-of-kind
        talent for developing young girls into beautiful performers and dancers
        as well as delivering the audience an exceptional experience. This is
        first-rate, quality instruction, and I couldn’t be more pleased.” –Kelly
        Raz
      </p>
      <div className="btn-wrap">
        <Link to="/classes" className="bt">
          Class Schedule <RightArrow />
        </Link>
      </div>
    </div>
  </div>
)

export default Mission
