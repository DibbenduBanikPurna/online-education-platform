import React from 'react';
import Footer from '../../Footer/Footer';
import CourceDashboard from './CourceDashboard/CourceDashboard';
import CourceTech from './CourceTech/CourceTech';
import CourceTechForm from './CourceTech/CourceTechForm/CourceTechForm';

const CreateCource = () => {
    return (
        <div>
           
            <CourceDashboard/>
            <br/>
            <CourceTech/>
            <br/>
            <CourceTechForm/>
            <br/>
            <Footer/>
        </div>
    );
};

export default CreateCource;