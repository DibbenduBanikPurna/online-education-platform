import React from 'react';



import Footer from '../Footer/Footer';




import Banner from './Banner/Banner';
import CarrierBlog from './CarrierBlog/CarrierBlog';
import Courses from './Courses/Courses';
import Greetings from './Greetings/Greetings';
import Home from './Home/Home';
import Joinning from './Joining/Joinning';
import PracticalWork from './PracticalWork/PracticalWork';

const HomeHeader = () => {
    return (
        <div>
            <Greetings/>
            <Home/>
           <Courses/>
            <Banner/>
           <CarrierBlog/>
          <PracticalWork/>
            <Joinning/>
            <Footer/>
        </div>
    );
};

export default HomeHeader;