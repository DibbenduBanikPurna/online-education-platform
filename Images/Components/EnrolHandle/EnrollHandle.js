import React from 'react';
import { useParams } from 'react-router-dom';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const EnrollHandle = () => {
    const {name}=useParams();
    console.log(name);
    return (
        <div className="row">

            <div className="col-md-6 pt-5 mt-5">
                <form>
                    <input className="form-control" type="text" placeholder="Enter Name"/>
                    <br/>
                    <input className="form-control" type="number" placeholder="Phone Number"/>
                    <br/>
                    <input className="form-control" type="email" placeholder="Email"/>
                    <br/>
                    <input className="form-control" type="password" placeholder="Password"/>
                    <br/>
                    <textarea className="form-control"></textarea>

                </form>
            </div>

            <div className="col-md-6">
                <h5>Your Order</h5>
                <div>
                    <p>Product</p>
                    <p></p>
                    <p>SubTotal</p>
                    <p>Total</p>
                </div>
                <div>
                    <p>SubTotal</p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>

                    <ProcessPayment/>
            </div>
            
        </div>
    );
};

export default EnrollHandle;