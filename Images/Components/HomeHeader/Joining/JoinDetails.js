import React from 'react';
import { Link } from 'react-router-dom';
import './Joinning.css'
const JoinDetails = ({data}) => {
    return (
        <div className="col-md-6 col-sm-12">
            <div className="card join">
                <div className="card-body">
                    <h2 className="title">{data.Title}</h2>
                    <p>{data.Description}</p>
                    <Link to="/affliates">
                    <button className="buttons">Show Details</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default JoinDetails;