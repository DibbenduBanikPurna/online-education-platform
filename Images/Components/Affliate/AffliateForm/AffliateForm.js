import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../App';
import Footer from '../../Footer/Footer';
import './AffliateForm.css'
const AffliateForm = () => {

    const [userData,setUserData]=useState();
    const [user,setUser]=useState([])
    console.log(user);
  //  console.log(userData)
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    const handleBlur=(e)=>{

       // console.log(e.target.name,e.target.value);
        const newUser={...userData}
        newUser[e.target.name]=e.target.value;
        setUserData(newUser);

    }

    const handleSubmit=(e)=>{
        e.preventDefault();

       
        setUser([...user, userData])
    }

    return (

        <section className="row">
            <div className="aff-head">
                <h4>Register as an Affiliate</h4>
            </div>
            <br/>

        <div className="row mt-3">

        
        <div className="col-md-6 m-auto">

            <h5>Fill out this form carefully, with proper information</h5>
            <p>* Required fields</p>
            <form onSubmit={handleSubmit}>
                <label>FirstName</label>
                <br/>
                <input onBlur={handleBlur} name="first-name" className="form-control" className="form-control" type="text" placeholder="First Name"/>
                <br/>
                <label>LastName</label>
                <input onBlur={handleBlur} name="last-name" className="form-control" type="text" placeholder="Last Name"/>
                <br/>
                <label>Phone Number</label>
                <input onBlur={handleBlur} name="phone" className="form-control" type="number" placeholder="Phone Number"/>
                <br/>
                <label>Email-Address</label>
                <input onBlur={handleBlur} name="email" defaultValue={loggedInUser.email} className="form-control" type="email" placeholder="Email-Address"/>
                <br/>

                <p>This is the email address associated with your currently logged in WordPress user account.

           If you want to use a different email address, log out of your WordPress account then try a new registration.</p>
           <label>Address-Line</label>
           <input onBlur={handleBlur} name="address" className="form-control" type="text" placeholder="Address Line"/>
                <br/>
                <label>City</label>
                <input onBlur={handleBlur} name="city" className="form-control" type="text" placeholder="City"/>
                <br/>
                <label>Zip-Code</label>
                <input onBlur={handleBlur} name="code" className="form-control" type="text" placeholder="Zip Code"/>
                <br/>
                <label>Company</label>
                <input onBlur={handleBlur} name="company" className="form-control" type="text" placeholder="Company Name"/>
                <br/>
                <label>Country</label>
                <input className="form-control" onBlur={handleBlur}
                name="country" type="text" list="country" />
             <datalist id="country">
            <option>Bangladesh</option>
            <option>India</option>
            <option>USA</option>
             <option>Uk</option>
               </datalist>

               
                <br/>
               
                
                <label>Website</label>
                <input onBlur={handleBlur} name="website" className="form-control" type="text" placeholder="Website Url"/>
                <br/>
                <label>Fb-Page-url</label>
                <input onBlur={handleBlur} name="fb-page" className="form-control" type="text" placeholder="Fb page Url"/>
                <br/>
                <label>bKash Personal Mobile Account Number</label>
                <input onBlur={handleBlur} name="account" className="form-control" type="text" placeholder="bKash Personal Mobile Account Number"/>
                <br/>
                    <input  type="checkbox"/>
                    <span>I have read and agree to the Terms and Conditions</span>
                    <br/>
                    <input className="form-control btn btn-outline-primary" type="submit" placeholder="form-control"/>
            </form>

            <br/>
            
           
        </div>
        
        </div>
        <Footer/>
        </section>
    );
};

export default AffliateForm;