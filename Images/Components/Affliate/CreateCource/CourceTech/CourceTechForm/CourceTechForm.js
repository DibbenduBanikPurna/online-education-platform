import React, { useState } from 'react';

const CourceTechForm = () => {
     
    const [userData,setUserData]=useState({});
    //console.log(userData);
    const [user,setUser]=useState([]);
    console.log(user);
    const handleSubmit=(e)=>{
        e.preventDefault();

        setUser([...user,userData]);

    }

    const handleBlur=(e)=>{
        const newUser={...userData}
        newUser[e.target.name]=e.target.value;
        setUserData(newUser);
    }
    return (
        <div>
            <h2>Apply To Be An Instructor</h2>

              <p>Personal Information</p> 
              <div className="">
                  
            <form onSubmit={handleSubmit} className="d-flex justify-content-around">
                <div>

                
                <label>Your Name <span className="text-danger">*</span></label>
                <input  onBlur={handleBlur} name="name" className="form-control" type="text"/>
                <br/>
               
                <label>Mobile  <span className="text-danger">*</span></label>
                <input  onBlur={handleBlur} name="mobile" className="form-control" type="text" placeholder="Enter Name"/>
                <br/>
                <label>Email <span className="text-danger">*</span></label>
                <input  onBlur={handleBlur} name="email" className="form-control" type="text"/>
                <br/>
                <label>URL of your resume (use Google Drive)  <span className="text-danger">*</span></label>

                <input  onBlur={handleBlur} className="form-control" type="text" name="url" />
                <br/>
                <label>Facebook Profile URL <span className="text-danger">*</span></label>
                <input  onBlur={handleBlur} className="form-control" type="text" name="fb-url"/>
                <br/>
                <label>LinkedIn Profile URL  <span className="text-danger">*</span></label>
                <input  onBlur={handleBlur} className="form-control" type="text" name="link-url"/>
                <br/>
                <label>Tell us a bit about your plans (with us) <span className="text-danger">*</span></label>
                <textarea  onBlur={handleBlur} name="about" className="form-control">

                </textarea>

                <input type="submit" value="submit"/>
                </div>

                <div >
                <label>What topic(s) do you want to teach on O.E.P?   <span className="text-danger">*</span></label>
                <input name="topic" className="form-control" onBlur={handleBlur}
                name="country" type="text" list="experience" />
             <datalist id="experience">
            <option>None</option>
            <option>6 Month</option>
            <option>12 Months</option>
             <option>18 Months</option>
             <option>24 Months</option>
               </datalist>
              
                <br/>

                <label>URL of your demo video or existing tutorial(s)   <span className="text-danger">*</span></label>
                <input name="tutorial" onBlur={handleBlur} className="form-control" type="text" placeholder="Enter Name"/><br/>

                <label>Youtube Channel URL  <span className="text-danger">*</span></label>

                 <input   name="youtube-url"  onBlur={handleBlur} className="form-control" type="text" placeholder="Enter Name"/><br/>

                 <label>Do you have a fully completed course ready to upload on O.E.p <span className="text-danger">*</span></label>
                 <br/>
                 <input type="checkbox" id="yes" name="yes" value="yes"/>
                 <label for="yes"> Yes</label><br/>

           <input type="checkbox" id="vehicle2" name="no" value="started"/>

           <label for="no"> No</label><br/>
           

         <input type="checkbox" id="vehicle3" name="yeah" value="I have started creating, not completed yet"/>
         <label for="vehicle3">I have started creating, not completed yet </label><br/>

              


                

                </div>

            </form>
            </div> 
        </div>
    );
};

export default CourceTechForm;