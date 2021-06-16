import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFastBackward,fabFa500px  } from '@fortawesome/free-solid-svg-icons'
const AffilateSectorDetail = ( {data}) => {
    return (
        <div className="col-md-6">
            <div className="card p-5 m-2">
                <FontAwesomeIcon  className="f" icon={faFastBackward}/>
                <div className="card-body">
                    <h5>{data.Title}</h5>
                    <p>{data.Description}</p>
                </div>
            </div>
        </div>
    );
};

export default AffilateSectorDetail;