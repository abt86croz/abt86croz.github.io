import React from 'react';
import './styles/Home.css'
import HomeVideo from '../video/home.mp4'

const Home = () => (
    <div className="home-container">
        <div className="wrap">
            <div className='video-container'>
                <video autoPlay loop>
                    <source src={HomeVideo} type='video/mp4' />
                    Your browser does not support the video tag.
                 </video>
            </div>
        </div>
        <div className='donate-button-wrap'>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="YEGY2CH6H5M88" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </div>
    </div>
)
export default Home;