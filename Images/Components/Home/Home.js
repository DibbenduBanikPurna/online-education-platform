import React from 'react';
import HomePic from '../../../Images/online-education.jpg'
const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12 mt-5 pt-5">

                <h3 className="mb-4">Learn Like Yourselves, <br/>Build Confidence</h3>

                <p className="text-success" style={{textAlign: "justify"}}>Acquire the most important skills of the present time by enrolling in online courses, training and career track programs of your choice.</p>
                
               
                <button className="btn btn-warning">See-Cources</button>

                <ol className="mt-4 pt-4">
                    <li>Content created by industry experts</li>
                    <li>Direct support from mentors</li>
                    <li>The advantage of learning at any time from anywhere</li>
                    <li>Projects and assignments, based on actual use,</li>
                </ol>


                </div>

                <div className="col-md-6 col-sm-12 mt-5 pt-5">
                    <img className="img-fluid" src={HomePic} alt=""/>
                    </div>
            </div>
            
        </div>
    );
};

export default Home;