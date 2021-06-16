import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const MarkettingDetail = ({data}) => {
    console.log(data);
    return (
        <div className="col-md-6 m">
            
                <h2 style={{color:"#102040"}}>{data.title}</h2>
                <h5 className="text-dark"><FontAwesomeIcon style={{color:"#FE9C37"}} icon={data.icon1}/> {data.description1}</h5>
                <h5> <FontAwesomeIcon style={{color:"#FE9C37"}} icon={data.icon2}/>{data.description2}</h5>
                <h5> <FontAwesomeIcon style={{color:"#FE9C37"}} icon={data.icon3}/>{data.description3}</h5>


            
        </div>
    );
};

export default MarkettingDetail;