import React from 'react';
import './MarkettingBanner.css'
const MarkettingBanner = () => {
    return (
        <section className="banner">

   <div className="container">
            <div className="row">
                <div className="col-md-8">
                <h5>
                A career-oriented program is an investment in your own skills and future. Course quality, time and cost - three things to keep in mind so make a decision.
                </h5>
                </div>


                <div className="col-md-3">

                    <button type="button" className="admit-btn mb-3">Admit Now</button>
               
                    <h5>Price:$10000</h5>
                </div>  
            </div>
      
        </div>
        </section>
       
    );
};

export default MarkettingBanner;