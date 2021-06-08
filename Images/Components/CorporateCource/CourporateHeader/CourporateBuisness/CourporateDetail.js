import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CourporateDetail = ({data}) => {
    return (
        <div className="col-md-3 mt-5 pt-5">
            <div className="card">
                <div className="card-body p-5">
                    <FontAwesomeIcon icon={data.icon}/>
                    <p>{data.Name}</p>
                </div>
            </div>
            
        </div>
    );
};

export default CourporateDetail;