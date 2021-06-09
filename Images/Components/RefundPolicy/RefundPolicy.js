import React from 'react';
import Footer from '../Footer/Footer';

const RefundPolicy = () => {
    return (
        <section>
              <div className="header">
            <h3>Request A Refund</h3>

        </div>
        <div className="row">
            <p>We want you to enjoy a smooth and valuable experience here at Bohubrihi. However, if you feel that we have failed to do so in any way, do feel free to demand a refund within 48 hours after purchasing any course. By requesting a refund, you agree to give us a chance to help you first. If we fail to help, you get your money back.</p>

            <h3>How to get refund</h3>
            <ol>
                <li>Get your order ID. You can get them in the ‘orders‘ section of your Billing Dashboard. For example- #3346</li>
                <li>
                Fill out the form in this page below.
                </li>
            </ol>
            <br/>
            <h3>You may not get refund if-</h3>
            <ul>
                <li>you request refund more than 48 hours after placing the order (as in purchasing the course)</li>
                <li>you request refund without completing at least 10% of the course</li>
                <li>we do not consider your reasons honest or eligible enough</li>
                <li>we find out that you are trying to abuse the refund-feature by any means</li>
            </ul>
            <br/>
            <h4>Refund Request Form</h4>
            <p>We are sorry you are not quite happy with the course and demanding a refund. Please let us know in details what went wrong or why you didn't like the course. The more detailed your feedback is, the easier it will be for us to consider your request.</p>

            <form>
                <label htmlFor="cource">
                Select Course *
                </label>
                <br/>

                <input type="text" name="cource" />
                <br/>

                <label htmlFor="id">
                Purchase Order ID *
                </label>
                <br/>

                <input type="text" name="refund" />
                <br/>

                <label>
                Why are you demanding a refund? *
                </label>
                <br/>

                <input type="text" name="description"/>
                <br/>

                <label>
                Description *
                </label>
                <br/>

               <textarea name="description"></textarea>
               <br/>

               <label htmlFor="email">Your email address *</label>
               <br/>

                <input type="email" name="email"/>
                <br/>

                
                <label htmlFor="phone">Mobile *</label>
                <br/>

                <input type="number" name="mobile"/>
                <br/>
                <br/>
                    <button className="btn btn-outline-primary">Submit Request</button>

            </form>
      
        </div>
        <br/>
        <br/>
        <Footer/>
        </section>
      
    );
};

export default RefundPolicy;