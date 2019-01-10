import React, { Component } from 'react'
import postscribe from 'postscribe'

/* eslint-disable max-len */

class ClassListings extends Component {
  componentDidMount() {
    const begginingBalletScript =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat2=Beginning%20Ballet&hidecols=Gender,Ages,EndDate,Session,openings&sort=class"></script>'

    const eightWeek =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=8-Week%20Sessions&hidecols=Gender,Ages,EndDate,Session,Openings&sort=days"></script>'

    const byPlacement =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat2=by%20placement%20only&hidecols=Gender,Ages,EndDate,Session,Openings,Class%20Starts&sort=days&sort=class"></script>'

    const matPilates =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat2=fitness&hidecols=Description,Gender,Ages,EndDate,Session,Openings&sort=days&sort=class"></script>'

    // postscribe
    postscribe('#beggining-ballet', begginingBalletScript)
    postscribe('#eight-week', eightWeek)
    postscribe('#by-placement', byPlacement)
    postscribe('#matt-pilates', matPilates)
  }

  render() {
    return (
      <div className="class-listings-container">
        <div id="beggining-ballet">
          <p className="heading show">Beginning Ballet | January 3 - May 3, 2019</p>
        </div>
        <div id="eight-week">
          <p className="heading show">8-Week Sessions</p>
          <span className="subtitle-listing">Session 1: January 3 – February 27, 2019</span>
          <span className="subtitle-listing">Session 2: February 28 – May 1, 2019</span>
        </div>
        <div id="by-placement">
          <p className="heading show">By Placement Only | January 3 – May 3, 2019</p>
        </div>
        <div id="matt-pilates">
          <p className="heading show">Mat Pilates | 1-Month Sessions</p>
        </div>
      </div>
    )
  }
}

export default ClassListings
