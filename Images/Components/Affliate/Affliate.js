import React from 'react';
import { Link } from 'react-router-dom';
import './Affliate.css'
import AffliateOffer from './AffliateOffer/AffliateOffer';
import AffliateQuestion from './AffliateQuestion/AffliateQuestion';
import AffilateSector from './AffliateSector/AffilateSector';
const Affliate = () => {
    return (
        <section>
              <div className="aff text-light">
            <h3>Best Affiliate Marketing Program In Bangladesh</h3>
            <br/>

            <h5>Earn money by promoting Bohubrihi. 20% commission from each sale.</h5>
            <div className="d-flex justify-content-between">
                <Link to="affliate-form">
                <button className="reg-btn">Register as a affliant</button>
                </Link>
               <Link to="/affliate-dash">
               <button className="af-btn">Affliant Dashboard</button>
               </Link>
               
            </div>


        </div>
                <br/>

                <AffilateSector/>

                <br/>
                <AffliateOffer/>
                <br/>
                <AffliateQuestion/>
                
        </section>
      
    );
};

export default Affliate;