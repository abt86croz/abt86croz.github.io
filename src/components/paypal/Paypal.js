/* eslint-disable semi */
/* eslint-disable quotes */
import React from "react";
import "./Paypal.css";

export const PayPalNutCracker = () => (
  <div className="paypal-nutcracker">
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="MA4HPCBGQ8KL8" />
      <table>
        <tr>
          <td>
            <input type="hidden" name="on0" value="'Step Into The Story' Nutcracker Series" />
            &apos;Step Into The Story&apos; Nutcracker Series
          </td>
        </tr>
        <tr>
          <td>
            <select name="os0">
              <option value="Saturday | 2:00pm">Saturday | 2:00pm $10.00 USD</option>
              <option value="Saturday | 4:00pm">Saturday | 4:00pm $10.00 USD</option>
              <option value="Sunday | 11:00am">Sunday | 11:00am $10.00 USD</option>
              <option value="Sunday | 1:00pm">Sunday | 1:00pm $10.00 USD</option>
            </select>
          </td>
        </tr>
      </table>
      <input type="hidden" name="currency_code" value="USD" />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
        border="0"
        name="submit"
        alt="PayPal - The safer, easier way to pay online!"
      />
      <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
  </div>
);

export const SummerShowPaypal = () => (
  <div className="paypal-nutcracker">
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="T2JFVTT5CC88J" />
      <table>
        <tr>
          <td>
            <input type="hidden" name="on0" value="Tickets" />
            Tickets
          </td>
        </tr>
        <tr>
          <td>
            <select name="os0">
              <option value="Sat @ 4pm | Adult">Sat @ 4pm | Adult $20.00 USD</option>
              <option value="Sat @ 4pm | Student">Sat @ 4pm | Student $15.00 USD</option>
              <option value="Sat @ 6pm | Adult">Sat @ 6pm | Adult $20.00 USD</option>
              <option value="Sat @ 6pm | Student">Sat @ 6pm | Student $15.00 USD</option>
            </select>
          </td>
        </tr>
      </table>
      <input type="hidden" name="currency_code" value="USD" />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
        border="0"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Add to Cart"
      />
    </form>
  </div>
);
