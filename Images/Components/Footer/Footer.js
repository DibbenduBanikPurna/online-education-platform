import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee  } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <section>

        
        <div className="row">
            <div className="col-md-3">
                <h3>Navigate</h3>
                <ul>
                   <li>All Course</li> 
                   <li>Blog</li>
                   <li>Documentation</li>
                   <li>Certificate Verify</li>
                   <li>Asked Question?</li>
                   <li>Help-Line</li>
                </ul>


            </div>
            <div className="col-md-3">
            <h3>Work With Us</h3>
                <ul>
                   <li>Related To Online Education Platform</li> 
                   <li>Our Team</li>
                   <li>Affiliate Program</li>
                   <li>Suggest New Cource</li>
                   <li>Write Blog</li>
                   <li>Want To Be An Instructor?</li>
                </ul>
                
                </div>
                <div className="col-md-3">
                <h3>About Online Education platform</h3>
                <p>
                O.E.P is Bangladesh’s leading educational platform for superior online courses, professional training and corporate eLearning services that help you develop useful skills and accomplish more in life. Our online courses and career-track programs are designed in collaboration with the best of industry experts and organizations in Bangladesh.
                </p>
                </div>
                <div className="col-md-3">
                <h3>Subscribe For Offers</h3>
                <span></span>
                <input type="email" placeholder="Enter Email"/>
                <p>Areas of Interest</p>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Technology"/>
                <label for="vehicle1">Technology</label><br></br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Buisness"/>
                <label for="vehicle1">Buisness</label><br></br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Academics"/>
                <label for="vehicle1">Academics</label><br></br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Career Growth"/>
                <label for="vehicle1">Career Growth</label><br></br>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Learn And Development "/>
                <label for="vehicle1">Learn And Development</label><br></br>

                <button className="btn btn-primary">Subscribe</button>


                
                </div>
        </div>
        <div className="row">
            <div className="col-md-3">
            <FontAwesomeIcon icon={faCoffee} />

            </div>
        </div>

        <div className="bg-secondary text-light p-3">
            <p>Privacy Policy | Refund Policy | Terms And Conditions | Your Account</p>
            <p>Copyright 2021 - Bohubrihi Technologies Ltd. | info@bohubrihi.com | +8801916-633509 (10AM-5PM)<br/>
            House 82, Road 10/1, Block D, Niketan, Gulshan 1, Dhaka - 1212. All Rights Reserved.</p>
        </div>

        </section>
        
    );
};

export default Footer;