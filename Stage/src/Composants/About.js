import React from 'react';
import smmc from '../image/FP_Gr_Tr.png';

import '../css/About.css';
import Nav from './Nav_bar';

const About = () => {
    return (
        
        <div>
            <Nav/>
            <div className='divsmmc'>
                <div> <img src={smmc} className='img_about_smmc'/> </div>
                <div className='texte' > 
                    <h3>Integer luctus lorem semper, sodales nulla sed, cursus nibh. Interdum et 
                    malesuada fames ac ante ipsum primis in faucibus. Sed tempus venenatis ex eget
                     congue. Mauris et pulvinar ex, sit amet congue purus. Suspendisse potenti. Vivamus
                      posuere posuere magna, molestie mollis mauris varius non. Nam a est et nibh congue
                       dictum. Suspendisse a nisl dapibus, mollis nunc sit amet, maximus quam. Vestibulum gravida tristique metus, eget iaculis nibh gravida non.</h3>
                </div>
            </div>

            

            <div className='divpersonne'>

            </div>
        </div>
    );
}

export default About;
 