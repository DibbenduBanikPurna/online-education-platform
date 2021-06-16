import React, { useState } from 'react';
import { affiliateHeaderData } from '../../Data/Data';
import AffilateSectorDetail from './AffilateSectorDetail';
const AffilateSector = () => {
    const [data,setData]=useState(affiliateHeaderData)
    return (
        <div className="row">
            {
                   data.map(data=>{
                       return <AffilateSectorDetail data={data}/>
                   }) 
            }
            
        </div>
    );
};

export default AffilateSector;