/* eslint-disable quotes */
/* eslint-disable semi */
import React from "react";

import PDFIcon from "react-icons/lib/fa/file-pdf-o";
import SummerClassSched from "../../pdf/summer-schedule.pdf";
import SummerHandout from "../../pdf/summer-handout.pdf";

const SummerButtons = () => (
  <div>
    <div className="btn-wrap">
      <a className="bt" href={SummerClassSched} target="_blank" rel="noopener noreferrer">
        <PDFIcon /> SUMMER CLASS schedule
      </a>

      <a className="bt" href={SummerHandout} target="_blank" rel="noopener noreferrer">
        <PDFIcon /> SUMMER HANDOUT
      </a>
    </div>
  </div>
);

export default SummerButtons;
