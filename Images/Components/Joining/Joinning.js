import React, { useState } from 'react';
import { JoinData } from '../Data/Data';
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
              <h5><a target="_blank" href="https://www.thedailystar.net/">The Daily Star</a></h5>
                <h5><a target="_blank" href="https://www.banglatribune.com/">The Bd Tribute</a> </h5>
             <h5><a target="_blank" href="https://indianexpress.com/section/sports/">Sports News</a></h5>
              </div>
                      
                     
                  
              </div>
            </footer>
            
        </div>
    );
};

export default Joinning;