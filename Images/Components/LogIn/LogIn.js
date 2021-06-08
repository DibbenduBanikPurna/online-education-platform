import React from 'react';
import Footer from '../Footer/Footer';
import LogInFunction from './LogInFunction/LogInFunction';
import LoginHeader from './LoginHeader/LoginHeader';

const Login = () => {
    return (
        <div>
            <LoginHeader/>
            <LogInFunction/>
            <Footer/>
        </div>
    );
};

export default Login;