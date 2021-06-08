import React from 'react';
import Register from '../Register/Register';
import SignIn from '../SignIn/SignIn';

const LogInFunction = () => {
    return (
        <div className="container">
            <div className="row mt-5 pt-5">
                <div className="col-md-6">
                <SignIn/> 
                </div>

                <div className="col-md-6 mb-5 pb-5">
                   
                    <Register/>
                </div>
            </div>
            
        </div>
    );
};

export default LogInFunction;