import React, { useState } from 'react';
import { programData } from '../../Data/Data';
import MarkettingDetail from './markettingDetail/MarkettingDetail';

const MarkettingProgram = () => {

    const [data,setData]=useState(programData)
    console.log(programData)

    return (
        <div className="row">
            {
                data.map(data=>{
                    return <MarkettingDetail data={data}/>
                })
            }
        
        </div>
    );
};

export default MarkettingProgram;