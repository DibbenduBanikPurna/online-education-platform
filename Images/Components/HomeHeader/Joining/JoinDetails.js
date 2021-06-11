import React from 'react';
import './Joinning.css'
const JoinDetails = ({data}) => {
    return (
        <div className="col-md-6 col-sm-12">
            <div className="card join">
                <div className="card-body">
                    <h2 className="title">{data.Title}</h2>
                    <p>{data.Description}</p>
                    <button className="buttons">Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default JoinDetails;