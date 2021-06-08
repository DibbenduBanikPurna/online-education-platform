import React from 'react';
import Footer from '../Footer/Footer';
import Courses from '../HomeHeader/Courses/Courses';
import AllCourceHeader from './AllCoureHeader/AllCourceHeader';


const AllCources = () => {
    return (
        <div>
            <AllCourceHeader/>
            <hr/>
            <Courses/>
            <hr/>
            <Footer/>
        </div>
    );
};

export default AllCources;