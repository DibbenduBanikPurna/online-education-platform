import React from 'react';

const AffliateQuestionDetail = ({data}) => {
    return (
        <div className="col-md-6 mb-4">
            <h5>{data.Title}</h5>
            <p>{data.Description}</p>
        </div>
    );
};

export default AffliateQuestionDetail;