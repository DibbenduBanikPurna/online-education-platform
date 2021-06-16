import React, { useState } from 'react';
import { affiliateQuestionData } from '../../Data/Data';
import AffliateQuestionDetail from './AffliateQuestionDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const AffliateQuestion = () => {
    const [data,setData]=useState(affiliateQuestionData)
    return (
        <div className="row">
            <h2 className="text-center mb-5">Frequently Asked Questions</h2>
            <br/>
            {
                data.map(data=>{
                    return <AffliateQuestionDetail data={data}/>
                })
            }
            <Link to="/affliate-form">
            <button className="btn btn-outline-primary"><FontAwesomeIcon icon={faArrowCircleRight}/> Register As A Affliate</button>
            </Link>
          
        </div>
    );
};

export default AffliateQuestion;