import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { JoinData } from '../../Data/Data';

import JoinDetails from './JoinDetails';

const Joinning = () => {
    const [data,setData]=useState(JoinData)
    return (
        <div className="container">
            <div className="row">
                {
                    data.map(data=>{
                        return <JoinDetails key={data.id} data={data}/>
                    })
                }
            </div>
            <footer>
              <div className="row mt-5">
              <div style={{border:"1px solid black", padding:"20px"}} class="d-flex justify-content-around">
              <h5><Link target="_blank" to="https://www.thedailystar.net/">The Daily Star</Link></h5>
                <h5><Link target="_blank" to="https://www.banglatribune.com/">The Bd Tribute</Link> </h5>
             <h5><Link target="_blank" to="https://indianexpress.com/section/sports/">Sports News</Link></h5>
              </div>
                      
                     
                  
              </div>
            </footer>
            
        </div>
    );
};

export default Joinning;