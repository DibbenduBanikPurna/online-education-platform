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
import Marketting from './Images/Components/DigitalMarketting/Marketting';
import Affliate from './Images/Components/Affliate/Affliate';
import AffliateForm from './Images/Components/Affliate/AffliateForm/AffliateForm';
import AffliateDashboard from './Images/Components/Affliate/AffliateDashboard/AffliateDashboard';
import CreateCource from './Images/Components/Affliate/CreateCource/CreateCource';
import EnrollHandle from './Images/Components/EnrolHandle/EnrollHandle';
import PlaceOrderFunction from './Images/Components/PlaceOrderFunction/PlaceOrderFunction';


export const UserContext=createContext();




function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
 console.log(loggedInUser);
  return (
    
    <div className="App">
        <Router>
          <p>Name:{loggedInUser.displayName}</p>
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

            <Route path="/digital-marketting">
          <Marketting/>
            </Route>
            <Route path="/affliates">
              <Affliate/>
            </Route>

            <Route path="/affliate-form">
              <AffliateForm/>
            </Route>

            <Route path="/affliate-dash">
              <AffliateDashboard/>
            </Route>

            <Route path="/instructor">

              <CreateCource/>


            </Route>

            <Route path="/enrol:name">
              <EnrollHandle/>
            </Route>

            <Route path="/place-order">
             <PlaceOrderFunction/>
            </Route>
            </UserContext.Provider>

            

           
          </Switch>

          </Router>
      
     
       
      

    
    </div>

  );
}

export default App;
