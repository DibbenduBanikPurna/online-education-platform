import React, { useState } from 'react';
import Data from '../../Data/Data';
import './Cources.css'
import CourseDetails from './CourseDetails/CourseDetails';

const Courses = () => {
    const [data,setData] =useState(Data);
    //console.log(data);
    return (
        <div className="mt-3">
          <h2>We Provide Friendly and Markable online cources</h2>
          <div className="row">
            {
               
                data.map(data=>{
                    return (
                       
                    <CourseDetails key={data._id} data={data} />
                    
                    )
                    
                })

               
            }
            </div>


        </div>
    );
};

export default Courses;