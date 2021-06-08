import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../FirebaseConfig/FirebaseConfig';
import { UserContext } from '../../../../App';


firebase.initializeApp(firebaseConfig);

const Register = () => {

    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const [user,setUser]=useState({
        email:'',
        password:'',
        error:'',
        success:'',
        IsSuccess:false
    })

   

    const handleChange=(e)=>{
        const newUser={...user};
        newUser[e.target.name]=e.target.value;
        setUser(newUser);
    }

    const handleSubmit=(e)=>{
       
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  .then((userCredential) => {
    
    var user = userCredential.user;
    var newUser={...user};
    newUser.success="user Created Successfully"
    newUser.IsSuccess=true
    setUser(newUser);
    const {email}=user;
    const signedInUser = {email } 
    setLoggedInUser(signedInUser);
   
    
  })
  .catch((error) => {
   
    var errorMessage = error.message;
    var newUser={...user}
    newUser.error=errorMessage;
    newUser.IsSuccess=false
    setUser(newUser);
    console.log(errorMessage);
    
  });
  e.preventDefault();
       
    }

    
    
    const handleGoggleSignUp=()=>{

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  
        .signInWithPopup(provider)
  
        .then((result) => {
            var user = result.user;

            const {displayName,email}=user;

             const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            
    
    
  }).catch((error) => {
    
   
    var errorMessage = error.message;
    alert(errorMessage);
   
 
    
    
  });
    }

    return (

        <div>
            <button onClick={handleGoggleSignUp} className="btn btn-primary">Register With Goggle</button>
            <br/>
            <br/>
            <p>------------Or---------------</p>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="email" className="form-control" type="text" placeholder="Enter Email"/>

                <br/>
                <input onChange={handleChange} name="password" className="form-control" type="password" placeholder="Enter password"/>
                <br/>
                <button className="btn btn-success mt-4">Register</button>
                <br/>
                {
                    user.error ? <p className="text-danger">{user.error}</p>:
                    
                    <p className="text-success">{user.success}</p>
                }
            </form>

        </div>
    );
};

export default Register;