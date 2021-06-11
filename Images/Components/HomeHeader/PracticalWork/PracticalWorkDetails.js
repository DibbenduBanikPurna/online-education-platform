import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const PracticalWorkDetails = ({data}) => {
    console.log(data);
    return (
        <div className="col-md-6 mt-2" >
            <div className="card m-2  ">
                <FontAwesomeIcon className="font" icon={data.icon}/>
            <h5 className=" mt-4">{data.Title}</h5>
                <div className="card-body p-5">
                   
                    <h6 className="text-dark">{data.Description}</h6>
                </div>
            </div>
            
        </div>
    );
};

export default PracticalWorkDetails;