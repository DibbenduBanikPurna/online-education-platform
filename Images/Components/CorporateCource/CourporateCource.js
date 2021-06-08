import React from 'react';
import CourporateBio from './CourporateBio/CourporateBio';
import CourporateForm from './CourporateForm/CourporateForm';
import CourporateBuisness from './CourporateHeader/CourporateBuisness/CourporateBuisness';
import CourporateHeader from './CourporateHeader/CourporateHeader';

const CourporateCource = () => {
    return (
        <div>
            <CourporateHeader/>
            <hr/>
            <CourporateBuisness/>
            <hr/>
            <CourporateBio/>
            <br/>
            <CourporateForm/>
        </div>
    );
};

export default CourporateCource;