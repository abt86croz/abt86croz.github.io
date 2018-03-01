
import React from 'react';
import { Link } from 'react-router-dom';
import RightArrow from 'react-icons/lib/fa/angle-double-right';

import './styles/Mission.css';

const Mission = () => (
    <div className='mission-container'>
        <div className='content'>
            <p className='title bold'>Your child's individuality inspires our teaching</p>
            <p>Albemarle Ballet Theatre (ABT) established their dance school in downtown Crozet in 2005 to bring high quality, affordable dance instruction to students of all backgrounds and skill levels. The mission of this family-owned business is to provide a fun, creative and nurturing environment for your son or daughter.</p>
            <p className='bold sub-title'>What do you and your child want from your dance experience?</p>
            <p>Your child goes to dance class with a dream, a vision, an expectation.  Your daughter might imagine twirling and floating in a gorgeous tutu. Your son pictures himself lifting a beautiful ballerina and performing magnificent leaps across the stage. Our students' and their parents tell us that they choose dance for many different reasons.</p>
            <p>Your child may dance for the of love dance, for a taste of the arts, to gain grace and poise, for recreation or athletic activity, to support gymnastics or other performing arts. Many of our dancers take class just to perform in our shows. And some work towards a professional dance career. </p>
            <p>Whatever you and your child wants from your dance school and whatever level they dance at, we work to fulfill your desires and make it a fun, rewarding experience.</p>
            <p className='bold sub-title'>Are you transitioning from another school or new to the area?</p>
            <p>Transferring to a new school can be uncomfortable. Moving to a new town can be daunting. Because of UVAs postgraduate and medical programs, and short-term positions like military posts, we have made this change easier for many children and families.</p>
            <p>We've built a wonderful community here at Albemarle Ballet Theatre to help make your child feel right at home. We work with you and your son or daughter to find the right classes, so they find comfort in their new dance school.</p>
            <p><span className='bold sub-title'>Most importantly, your son or daughter</span> learns from professionals who are excellent role models who help build your dancer's self-image and confidence. And your dancer gets the individual attention they deserve and need, because your child is unique.</p>
            <p className='italic sub-title'><span className='bold'>"ABT is an intimate studio, where children receive instruction that fits their particular needs. My two girls...get exactly what they need to be healthy, expressive, respectful dancers, students, and young women." –Bree Luck, Education Director for Live Arts</span></p>
            <div className='btn-wrap'>
                <Link to='/classes' className='bt'>Class Schedule <RightArrow /></Link>
            </div>
        </div>
    </div>
)
export default Mission;