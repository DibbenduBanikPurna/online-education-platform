import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../FirebaseConfig/FirebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';
if(firebase.app.length === 0){
firebase.initializeApp(firebaseConfig);
}
const SignIn = () => {

    const history=useHistory();
    const location=useLocation();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    const [user,setUser]=useState({
        email:'',
        password:'',
        error:'',
        success:'',
        IsSuccess:false
    })

    let { from } = location.state || { from: { pathname: "/" } };
    const handleChange=(e)=>{
        const newUser={...user};
        newUser[e.target.name]=e.target.value;
        setUser(newUser);
    }

    const handleSubmit=(e)=>{

        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
     .then((userCredential) => {
       
    var user = userCredential.user;


    const {displayName}=user;
    const signedInUser={displayName}
    setLoggedInUser(signedInUser);
    sessionStorage.setItem('token',signedInUser)
    history.replace(from);
    
   
   
   
  })
  .catch((error) => {
    
    var errorMessage = error.message;
    const newUser={...user}
    newUser.error=errorMessage;
    setUser(newUser);

    
    //console.log(errorMessage);

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
             sessionStorage.setItem('token',signedInUser)

            setLoggedInUser(signedInUser);
            history.replace(from);
    }).catch((error) => {

    var errorMessage = error.message;
    alert(errorMessage);

   });
}


    const resetPassword=(email)=>{
        firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    
  })
  .catch((error) => {
   alert(error);
 
  });
    }

   

    return (
        <div>
             <button onClick={handleGoggleSignUp} className="btn btn-primary">Log In With Goggle</button>
            <br/>
            <br/>
            <p>------------Or---------------</p>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="email" className="form-control" type="text" placeholder="Enter Email"/>

                <br/>
                <input onChange={handleChange} name="password" className="form-control" type="password" placeholder="Enter password"/>
                <br/>
                <button className="btn btn-success mt-4">Log-in</button>
                
                <br/>
                <br/>
                <h2 style={{cursor:'pointer'}} className="text-danger"
                onClick={()=>resetPassword(user.email)} >Lost your password?</h2>
                
                
                         {user.error && <p className="text-danger">{user.error}</p>}
               
            
                
            </form> 
        </div>
    );
};

export default SignIn;