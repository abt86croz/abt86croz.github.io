import React from 'react';
import { SpringPerformanceImage } from './Images';
import './styles/Performances.css'


const Performances = () => (
    <div className='performace-container'>
        <div className='ticket-container'>
            <p>Purchase Tickets</p>
            <form className='form' target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input className="form-control" type="hidden" name="cmd" value="_s-xclick" />
                <input className="form-control" type="hidden" name="hosted_button_id" value="8R2UGXPHF3Y6W" />
                <input type="hidden" name="on0" value="Show Time" /><span className='text'>Ticket</span>
                <select name="os0"><option value="Adult">Adult $18.00 USD</option><option value="Senior/Student">Senior/Student $14.00 USD</option></select>
                <input type="hidden" name="on1" value="Show Time" /><span className='text'>Show Time</span>
                <select name="os1"><option value="1:00pm">1:00pm </option><option value="5:00pm">5:00pm </option></select> 
                <input type="hidden" name="currency_code" value="USD" />
                <input className='btn-add-cart' type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </div>
        <SpringPerformanceImage/>
    </div>
)

export default Performances;