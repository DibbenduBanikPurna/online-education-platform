import React, {  useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

import ProcessPayment from '../ProcessPayment/ProcessPayment';

const EnrollHandle = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
   
    const [courceData,setCourceData]=useState({})
    
    useEffect(()=>{
        fetch(`http://localhost:300/cources/${loggedInUser.data}`)
        .then(res=>res.json())
        .then(data=>{
            setCourceData(data)
        })
    },[])

    return (
        <div className="row">

            <div className="col-md-6 pt-5 mt-5">
                <form>
                    <input defaultValue={loggedInUser.name} className="form-control" type="text" placeholder="Enter Name"/>
                    <br/>
                    <input className="form-control" type="number" placeholder="Phone Number"/>
                    <br/>
                    <input defaultValue={loggedInUser.email} className="form-control" type="email" placeholder="Email"/>
                    <br/>
                    <input className="form-control" type="password" placeholder="Password"/>
                    <br/>
                    <textarea className="form-control"></textarea>

                </form>
            </div>

            <div className="col-md-6">
                <h5>Your Order</h5>
                <div className="d-flex justify-content-around">

               
                <div>
                    <p>Product</p>
                    
                    
                    <p>Total</p>
                </div>
                <div>
                   
                    <p>{courceData.name}</p>
                    <p>{courceData.price}</p>
                    
                </div>
                </div>
                <hr/>
                <br/>
                    <ProcessPayment/>
            </div>
            
        </div>
    );
};

export default EnrollHandle;