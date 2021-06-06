import React from 'react';

const CourseDetails = ({data}) => {

    console.log(data);

    return (
        <div className="col-md-4">

<div className="card">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{data.name}</h5>
        <p><strong>${data.price}</strong></p>
        
        <button className="btn btn-secondary">Enroll-Now</button>
  </div>
</div>
        </div>
    );
};

export default CourseDetails;