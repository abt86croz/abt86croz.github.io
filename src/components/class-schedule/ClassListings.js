import React, { Component } from 'react'
import postscribe from 'postscribe'

/* eslint-disable max-len */

export default class ClassListings extends Component {
  componentDidMount() {
    /*
    const begginingBalletScript =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat2=Beginning%20Ballet&hidecols=Gender,Tuition,Ages,EndDate,Session,openings&sort=class"></script>'
*/
    const eightWeek =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=8-Week%20Sessions&hidecols=Gender,Tuition,Ages,EndDate,Session,Openings&sort=days"></script>'

    const byPlacement =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat2=by%20placement%20only&hidecols=Gender,Tuition,Ages,EndDate,Session,Openings,Class%20Starts&sort=days&sort=class"></script>'

    // const matPilates =
    //   '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat2=fitness&hidecols=Description,Gender,Tuition,Ages,EndDate,Session,Openings&sort=days&sort=class"></script>'

    const beginnerClasses =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat2=Beginning%20Ballet&hidecols=Gender,Tuition,Ages,EndDate,Session,Openings,Class%20Starts&sort=days&sort=class"></script>'

    const summerCamps =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=summer%20camp&hidecols=Gender,Tuition,Ages,EndDate,Session,Openings,Class%20Starts&sort=days&sort=class"></script>'

    // postscribe
    postscribe('#eight-week', eightWeek)
    postscribe('#by-placement', byPlacement)
    // postscribe('#matt-pilates', matPilates)
    postscribe('#beginner-classes', beginnerClasses)
    // postscribe('#summer-classes', beginnerClasses)
    postscribe('#summer-camps', summerCamps)
  }

  render() {
    return (
      <div className="class-listings-container">
        {/* <div id="beggining-ballet">
          <p className="heading show">Beginning Ballet | August 17 – May 2, 2020</p>
        </div> */}

        {/* <div id="matt-pilates">
          <p className="heading show">Mat Pilates | 1-Month Sessions</p>
        </div> */}
        <div id="eight-week">
          <p className="heading show">8-Week Sessions</p>
          <span className="subtitle-listing">Session 1: January 13 - March 6, 2021 </span>
          <span className="subtitle-listing">Session 2: March 10 - May 8, 2021</span>
        </div>
        <div id="beginner-classes">
          <p className="heading show">Beginner Classes | January 11 - May 8, 2021</p>
        </div>
        {/* <div id="summer-classes">
          <p className="heading show">Beginner Classes | September 8 - December 12, 2020</p>
        </div> */}
        <div id="by-placement">
          <p className="heading show">By Placement Only | January 11 - May 8, 2021</p>
        </div>
        <div id="summer-camps">{/* <p className="heading show">Summer Camps</p> */}</div>
      </div>
    )
  }
}
