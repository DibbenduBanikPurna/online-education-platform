import React, { useState } from 'react';
import { affiliateMiddleData } from '../../Data/Data';
import AffliateOfferDetail from './AffliateOfferDetail';

const AffliateOffer = () => {
    const [data,setData]=useState(affiliateMiddleData)
    return (
        <div className="row">
            {
                data.map(data=>{
                    return <AffliateOfferDetail data={data} />
                })
            }
            
        </div>
    );
};

export default AffliateOffer;