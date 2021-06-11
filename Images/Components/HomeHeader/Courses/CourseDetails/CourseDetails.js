import React from 'react';

const CourseDetails = ({data}) => {

   // console.log(data);

    return (
        <div className="col-md-4 mt-5">

<div className="card">
  <img src={require(`../../../../../Images/${data.picture}`).default}  className="card-img-top img-fluid" alt="..."/>
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