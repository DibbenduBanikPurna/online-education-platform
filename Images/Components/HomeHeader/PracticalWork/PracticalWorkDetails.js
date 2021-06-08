import React from 'react';

const PracticalWorkDetails = ({data}) => {
    console.log(data);
    return (
        <div className="col-md-6" >
            <div className="card m-2 ">
            <h5 className="text-secondary mt-4">{data.Title}</h5>
                <div className="card-body p-5">
                   
                    <p className="text-muted">{data.Description}</p>
                </div>
            </div>
            
        </div>
    );
};

export default PracticalWorkDetails;