import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../FirebaseConfig/FirebaseConfig';
if(firebase.app.length === 0){
firebase.initializeApp(firebaseConfig);
}
const SignIn = () => {

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

        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
     .then((userCredential) => {
    
    var user = userCredential.user;


    const {displayName}=user;
    const signedInUser={displayName}
    setLoggedInUser(signedInUser);
    //console.log(user);
   
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
                <button className="btn btn-success mt-4">Log-in</button>
                
                <br/>
                <br/>
                <p className="text-dark">Lost your password?</p>
                {user.error && <p className="text-danger">{user.error}</p>}
                
            </form> 
        </div>
    );
};

export default SignIn;