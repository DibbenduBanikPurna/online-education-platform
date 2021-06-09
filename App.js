import React, { createContext, useState } from 'react';
import './App.css';

import HomeHeader from './Images/Components/HomeHeader/HomeHeader';

import Navbar from './Images/Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import AllCources from './Images/Components/AllCources/AllCources';
import CourporateCource from './Images/Components/CorporateCource/CourporateCource';
import Login from './Images/Components/LogIn/LogIn'
import TermsCondition from './Images/Components/TermsCondition/TermsCondition';
import RefundPolicy from './Images/Components/RefundPolicy/RefundPolicy';
import PrivacyPolicy from './Images/Components/PrivacyPolicy/PrivacyPolicy'

export const UserContext=createContext();




function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  // console.log(loggedInUser);
  return (
    
    <div className="App">
        <Router>
          <p>Email:{loggedInUser.email}</p>
        <Navbar/>
          <Switch>
            <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>

           
            <Route exact path="/">
            <HomeHeader/>
            </Route>

            <Route exact path="/all-courses">
            <AllCources/>
            </Route>

            <Route path="/co-e-learning">
              <CourporateCource/>
            </Route>

            <Route path="/log-in">
              <Login/>
            </Route>

            <Route path="/terms-and-condition">
              <TermsCondition/>
            </Route>

            <Route path="/refund-policy">
             <RefundPolicy/>
            </Route>
            <Route path="/privacy-policy">
          <PrivacyPolicy/>
            </Route>
            </UserContext.Provider>
          </Switch>

          </Router>
      
     
       
      

    
    </div>

  );
}

export default App;
