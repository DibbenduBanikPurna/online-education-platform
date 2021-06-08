import React from 'react';
import Footer from '../../Footer/Footer';

const CourporateForm = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <div className="container mt-4 pt-4">
            <h4 className="text-center">Be it up-skilling or re-skilling teams across organization, employee <br/>onboarding, or long-term L and D program for your company; we've got <br/>you covered.</h4>

            <p className="mt-4">If you need custom-tailored courses/curriculum outside our existing courses, we are open for discussion too. Sign up for a phone call and discuss what’s best for your company.</p>

                <div className="row">

                    <div className="col-md-6 m-auto">

                    <form onSubmit={handleSubmit}>

                <input className="form-control" type="text" placeholder="First Name"/>
                <br/>
                <input className="form-control" type="text" placeholder="Last Name"/>
                <br/>
                <input className="form-control" type="number" placeholder="Mobile Number"/>
                <br/>
               
                <input className="form-control" type="email" placeholder="Email"/>
                <br/>
                <input className="form-control" type="text" placeholder="Company Name"/>
                <br/>
                <input className="form-control" type="text" placeholder="Your Role"/>
                <br/>
                <input className="form-control" type="text" placeholder="Prefered Topics Of Trainning"/>
                <br/>
                <textarea className="form-control" placeholder="Please Briefly describe your trainning needs"></textarea>
                <br/>
                <button className="btn btn-success">Get In Touch</button>


            </form>
                    </div>
                </div>
                    <br/>
                    <hr/>
                <Footer/>
            
        </div>
    );
};

export default CourporateForm;