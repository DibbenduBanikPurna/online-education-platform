import React from 'react';
import './App.css';
import Banner from './Images/Components/Banner/Banner';
import CarrierBlog from './Images/Components/CarrierBlog/CarrierBlog';
import Courses from './Images/Components/Courses/Courses';
import Footer from './Images/Components/Footer/Footer';


import Greetings from './Images/Components/Greetings/Greetings';
import Home from './Images/Components/Home/Home';
import Joinning from './Images/Components/Joining/Joinning';
import Navbar from './Images/Components/Navbar/Navbar';
import PracticalWork from './Images/Components/PracticalWork/PracticalWork';


function App() {
  return (
    
    <div className="App">

       <Navbar/>
       <Greetings/>
        <Home/>
        <hr/>
        <Courses/>
        <hr/>
        <Banner/>
        <hr/>

       <CarrierBlog/>

       <hr/>
       <PracticalWork/>
       <hr/>
      <Joinning/>
      <hr/>
      <Footer/>

    
    </div>

  );
}

export default App;
