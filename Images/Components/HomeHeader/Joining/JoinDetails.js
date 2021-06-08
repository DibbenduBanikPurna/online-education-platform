import React from 'react';

const JoinDetails = ({data}) => {
    return (
        <div className="col-md-6 col-sm-12">
            <div className="card">
                <div className="card-body">
                    <h2>{data.Title}</h2>
                    <p>{data.Description}</p>
                </div>
            </div>
        </div>
    );
};

export default JoinDetails;