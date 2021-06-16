import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AffliateOfferDetail = ({data}) => {
    return (
        <div className="col-md-4">
            <span>
                <FontAwesomeIcon className="fa" icon={data.icon}/>
            </span>
            <h5>{data.Title}</h5>
            <br/>
            <p>{data.Description}</p>
        </div>
    );
};

export default AffliateOfferDetail;