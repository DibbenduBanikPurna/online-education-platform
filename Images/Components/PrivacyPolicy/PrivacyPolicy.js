import React from 'react';
import Footer from '../Footer/Footer';

const PrivacyPolicy = () => {
    return (
        <section>
            <div className="header">
            <h3>Privacy Policy</h3>
            </div>

            <div>
                <h3>Your privacy is very important to us. At O.E.P:</h3>
                <ul>
                    <li>We don’t ask for personal information unless we truly need it.</li>
                    <li>
                    We don’t share your personal information except comply with the law, to provide services and to protect our rights.
                    </li>
                    <li>We don’t store personal information unless it’s required for our services.</li>
                </ul>
                <br/>
                <p>It is O.E.p policy to respect your privacy regarding any information we may collect while operating our website. We have outlined our privacy policy below. This Privacy Policy governs the manner in which Bohubrihi collects, uses, maintains and discloses information collected from users (each, a “User”) of the https://O.E.P.com website.</p>

                <div>
                    <h3>Personal identification information</h3>

                    <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>
                </div>
                <div>
                    <h3>Non-personal identification information</h3>
                    <p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</p>
                </div>

                <div>
                    <h3>Web browser cookies</h3>
                    <p>Our Site may use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.</p>
                </div>
                <div>
                    <h3>Contacting us</h3>
                    <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please Contact Us.This document was last updated on June 19, 2017</p>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </section>
        
    );
};

export default PrivacyPolicy;