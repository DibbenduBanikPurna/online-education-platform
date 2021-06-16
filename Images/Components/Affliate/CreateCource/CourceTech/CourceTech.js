import React, { useState } from 'react';
import { createCourseData } from '../../../Data/Data';
import CourceTechDetails from './CourceTechDetails';

const CourceTech = () => {
    const [data,setData]=useState(createCourseData)
    return (
        <section style={{backgroundColor:'#54595F'}}>
        <h5>Why Teach On O.E.P</h5>            

       <div className="row " >

            {
                data.map(data=>{
                    return <CourceTechDetails data={data}/>
                })
            }
       </div>

        </section>
       
    );
};

export default CourceTech;