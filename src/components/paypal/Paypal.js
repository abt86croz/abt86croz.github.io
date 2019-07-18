import React from 'react'
import './Paypal.css'

const PayPalNutCracker = () => (
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
      <img
        alt=""
        border="0"
        src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  </div>
)

export default PayPalNutCracker
