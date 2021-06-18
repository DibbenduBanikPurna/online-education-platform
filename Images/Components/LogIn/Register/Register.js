import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../FirebaseConfig/FirebaseConfig';
import { UserContext } from '../../../../App';
import { useHistory, useLocation } from 'react-router-dom';


firebase.initializeApp(firebaseConfig);

const Register = () => {

  const history=useHistory()
  const location=useLocation();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const [user,setUser]=useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success:'',
        check:'',
        IsSuccess:false
    })

   

    let { from } = location.state || { from: { pathname: "/" } };

    const handleChange=(e)=>{
        const newUser={...user};
        newUser[e.target.name]=e.target.value;
        setUser(newUser);
    }

    const handleSubmit=(e)=>{
       
     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
       .then((userCredential) => {
    
    var users = userCredential.user;
    
    var newUser={...user};
    newUser.success="user Created Successfully Check Your Email For verification"
    newUser.IsSuccess=true
    setUser(newUser);
    const {email}=users;
    const signedInUser = {email } 
    setLoggedInUser(signedInUser);
    sessionStorage.setItem('token',signedInUser)
    history.replace(from);
    updateName(user.name);
    verifyEmail();
    
    //console.log(user.name)
   
   
    
  })

  .catch((error) => {
   
    var errorMessage = error.message;
    var newUser={...user}
    newUser.error=errorMessage;
    newUser.IsSuccess=false
    setUser(newUser);
    
    
  });

  e.preventDefault();
       
    }


    //Google Signup
     const handleGoggleSignUp=()=>{

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  
        .signInWithPopup(provider)
  
        .then((result) => {
            var user = result.user;

            const {displayName,email}=user;

             const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);

            sessionStorage.setItem('token',signedInUser)
            history.replace(from);
            
    
    
  }).catch((error) => {
    
    alert(error.errorMessage);
   });

    }

    function updateName(name){
        console.log(name);
        const user = firebase.auth().currentUser;

    user.updateProfile({
  displayName:name,
  
   })
   .then(res=>{
      // console.log(res);
   
    
   }).catch((error) => {
  
    });

    }

    const verifyEmail=()=>{
    firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    
  });
}

    return (

        <div>
            <button onClick={handleGoggleSignUp} className="btn btn-primary">Register With Goggle</button>
            <br/>
            <br/>
            <p>------------Or---------------</p>

            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" placeholder="Enter Name" onChange={handleChange} name="name"/>
                <br/>

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