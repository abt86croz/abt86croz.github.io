/* eslint-disable semi */
/* eslint-disable quotes */
import React, { Component } from "react";
import postscribe from "postscribe";

/* eslint-disable max-len */

export default class ClassListings extends Component {
  componentDidMount() {
    /*
    const begginingBalletScript =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat2=Beginning%20Ballet&hidecols=Gender,Tuition,Ages,EndDate,Session,openings&sort=class"></script>'
*/
    const eightWeek =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=8-Week%20Sessions&hidecols=Gender,Tuition,Ages,EndDate,Session,Openings&sort=days"></script>';

    const byPlacement =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=tuition%20by%20semester&Cat2=by%20placement%20only&hidecols=Gender,Tuition,Ages,EndDate,Session,Openings,Class%20Starts&sort=age&sort=class"></script>';

    const beginnerClasses =
      '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=Tuition%20By%20Semester&Cat2=Beginning%20Ballet&hidecols=Gender,Tuition,Ages,EndDate,Session,openings,Class%20Starts&sort=class"></script>';

    // const summerCamps =
    //   '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=summer%20camp&hidecols=Gender,Tuition,Ages,EndDate,Session,Openings,Class%20Starts&sort=age,time&sort=class"></script>'

    // const summerClasses =
    //   '<script type="text/javascript" src="https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsJS?OrgID=534011&Cat1=Summer%20Classes&hidecols=Tuition,Class%20Starts,Gender,Ages,EndDate,Session,openings&sort=class"></script>'

    // postscribe
    postscribe("#eight-week", eightWeek);
    postscribe("#by-placement", byPlacement);
    postscribe("#beginner-classes", beginnerClasses);
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
          <div className="paddingTopSmall">
            <p className="subtitle center">Spring Session 1: 1/8/24 – 2/27/24</p>
            <p className="subtitle center">Spring Session 2: 3/4/24 – 4/30/24</p>
          </div>
        </div>
        <div id="beginner-classes">
          <p className="heading show">Beginner Classes | September 11, 2023 - May 4, 2024</p>
        </div>
        <div id="by-placement">
          <p className="heading show">By Placement Only | September 11, 2023 - May 4, 2024</p>
        </div>
        {/* <div id="summer-classes">
          <p className="heading show">Summer Classes | June 13 - August 5, 2022</p>
        </div>

        <div id="summer-camps">
          <p className="heading show">Summer Camps</p>
        </div> */}
      </div>
    );
  }
}

// Summer Classes | June 7 - August 6, 2021
