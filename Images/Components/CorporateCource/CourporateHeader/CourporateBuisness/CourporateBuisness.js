
import React, { useState } from 'react';
import { BuisnessData } from '../../../Data/Data';
import CourporateDetail from './CourporateDetail';

const CourporateBuisness = () => {
    const [data,setData]=useState(BuisnessData)
    return (
        <div>
            <div className="row">
            <h1 className="mt-5">Need online training for 10+ employees?<br/>
          Try O.E.P for Business</h1>
            {
                data.map(data=>{
                    return <CourporateDetail key={data.id} data={data} />
                })
            }

            </div>
         
        </div>
    );
};

export default CourporateBuisness;