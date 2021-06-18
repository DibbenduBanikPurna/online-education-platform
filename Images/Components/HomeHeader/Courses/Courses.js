import React, { useEffect, useState } from 'react';

import './Cources.css'
import CourseDetails from './CourseDetails/CourseDetails';

const Courses = () => {
    const [data,setData] =useState([]);

        useEffect(()=>{
            fetch('http://localhost:300/cources')
            .then(res=>res.json())
            .then(result=>{
                setData(result);
            })
        },[])
        
        const postData=(data)=>{
            console.log(data)
               
                fetch('http://localhost:300/addCource', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            
        }
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