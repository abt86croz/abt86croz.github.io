import React from 'react'
import './Performances.css'

/* eslint-disable unescaped-entities */
/* eslint-disable max-len */

// CLASS DESCRIPTION
const Performances = () => (
  <div className="performances-container">
    <div className="bg-image description-img" />
    <div className="content">
      <div className="description">
        <div className="heading">Upcoming Performances</div>
        <p className="sub-title bold">
          December 8th, 2018: The Nutcracker
          <span className="sub-title-specs">
            2:00pm & 5:00pm <br />
            The Wayne Theatre <br />
            Waynesboro, VA
          </span>
        </p>
        <p>
          E.T.A. Hoffman’s classic holiday favorite story set to the iconic
          music of Pyotr Illyich Tchaikovsky.
        </p>
        <p>
          Follow the link below to purchased tickets online: <br />
          <a
            href="http://waynetheatre.org/dec-8-the-nutcracker-presented-by-albemarle-ballet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://waynetheatre.org/dec-8-the-nutcracker-presented-by-albemarle-ballet/
          </a>
        </p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title bold">
          Nutcracker Community Outreach Performances:
          <span className="sub-title-specs">
            Monday, December 3rd, 4:30pm <br />
            Crozet Library <br />
            Ballet III – Advanced only
          </span>
        </p>
        <p>
          * One more Outreach Performance will be scheduled, date and time TBA
        </p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title bold">
          December 15th & 16th: ‘Step Into The Story’ Series A mini interactive
          Nutcracker for children
          <span className="sub-title-specs">
            The White Box Theatre at ABT <br />
            Crozet, VA <br />
            Saturday: 2:00pm & 4:00pm <br />
            Sunday: 11:00am & 1:00pm <br />
            $10 Admission for All Ages (Free for children under 1, as long at
            they sit in a lap)
          </span>
        </p>
        <div id="abtnutcracker" />
        <p>
          Albemarle Ballet Theatre presents “Step Into the Story”, a miniature
          version of our production of The Nutcracker created specially for
          Crozet’s youngest audience members! This one-hour show will take place
          at ABT’s studio White Box Theatre, with an intimate seating
          arrangement designed to be as close to the performers as possible.{' '}
        </p>
        <p>
          During the show, ABT’s advanced dancers will perform beloved solos
          from The Nutcracker, including the Sugar Plum Fairy, Russian, Arabian,
          and Clara and her Prince. Audience members will get to participate in
          the performance when the dancers teach steps from The Nutcracker! The
          performance will be followed by a reception with sweet holiday treats,
          and a meet and greet with photo opportunities with the dancers. This
          community-focused performance series offers discounted ticket prices,
          and it is the perfect holiday treat for you and your little dance
          lover!
        </p>
        <p>
          This is a paperless show! Just show your PayPal receipt on your phone
          at the door for entry. Tickets may also be purchased in person at the
          door.
        </p>
        {/* PAYPAL BUTTON */}
        <div id="paypal-nutcracker" className="paypal-nutcracker">
          <form
            target="paypal"
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="DR224BHA8QJMW"
            />
            <table>
              <tbody>
                <tr>
                  <td>
                    <input type="hidden" name="on0" value="Date/Time" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <select name="os0">
                      <option value="Saturday, 2:00PM">
                        Saturday, 2:00PM $10.00 USD
                      </option>
                      <option value="Saturday, 4:00PM">
                        Saturday, 4:00PM $10.00 USD
                      </option>
                      <option value="Sunday, 11:00AM">
                        Sunday, 11:00AM $10.00 USD
                      </option>
                      <option value="Sunday, 1:00PM">
                        Sunday, 1:00PM $10.00 USD
                      </option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="hidden" name="currency_code" value="USD" />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title bold">
          April 28th, 2019: Exploring Ballet & Ballet IA Only
          <span className="sub-title-specs">
            Studio Showing at ABT <br />
            Times TBA
          </span>
        </p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title bold">
          Spring Gala Community Outreach Performances:
        </p>
        <p>Two performances will be scheduled, dates and times TBA</p>
      </div>
      <hr />
      <div className="description">
        <p className="sub-title bold">
          May 11th, 2019: Spring Gala
          <span className="sub-title-specs">
            2:00pm & 6:00pm
            <br />
            The Dickinson Theatre at Piedmont Community College <br />
            Charlottesville, VA
          </span>
        </p>
      </div>
      <hr />
      <div className="description">
        <p>
          Our dance studio is conveniently located in Crozet, near Western
          Albemarle High School, Henley, Brownsville, and Crozet Elementary
          Schools, minutes away from Charlottesville, and near Greene County,
          Nelson County, Orange County and Waynesboro.
        </p>
        <p className="italic">
          For more information: <br /> email us at
          <a href="mailto:albemarleballettheatre@gmail.com" target="_top">
            <span> albemarleballettheatre@gmail.com</span>
          </a>
          , or call us at
          <a href="tel:+1-434-823-8888">
            <span> (434) 823-8888</span>
          </a>
          .
        </p>
        <p>
          <a
            href="https://goo.gl/maps/QeM6BCDorfy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here for directions to our dance school
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default Performances
