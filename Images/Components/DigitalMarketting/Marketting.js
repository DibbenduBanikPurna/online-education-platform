import React from 'react';
import MarkettingBanner from './MarkettingBanner/MarkettingBanner';
import MarkettingHeader from './MarkettingHeader/MarkettingHeader';
import MarkettingProgram from './MarkettingProgram/MarkettingProgram';

const Marketting = () => {
    return (
        <div>
            <MarkettingHeader/>
            <br/>
            <MarkettingProgram/>
            <br/>
            <MarkettingBanner/>
            
        </div>
    );
};

export default Marketting;