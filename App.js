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
            </UserContext.Provider>
          </Switch>

          </Router>
      
     
       
      

    
    </div>

  );
}

export default App;
