import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket  } from '@fortawesome/free-solid-svg-icons'
import './CourceTech.css'
const CourceTechDetails = ({data}) => {
    return (
        <div className="col-md-4">
            <div className="card m-3 p-5" >
                <FontAwesomeIcon className="techs" icon={faRocket}/>
                <div className="Card-body">
                <h2>{data.Title}</h2>
                <p>{data.Description}</p>

                </div>
            </div>
               
            
            
        </div>
    );
};

export default CourceTechDetails;