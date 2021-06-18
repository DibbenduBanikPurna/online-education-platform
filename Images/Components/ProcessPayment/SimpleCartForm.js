import React, { useState } from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom';

const SimpleCartForm = ({handlePaymentSuccess}) => {
    const [paymentError,setPaymentError]=useState('')
    const [paymentSuccess,setPaymentSuccess]=useState('')
  const stripe = useStripe();
  const elements = useElements();

  const history=useHistory();
  const handlePlace=()=>{
      history.push('/place-order')
  }

  const handleSubmit = async (event) => {
  
    event.preventDefault();

    if (!stripe || !elements) {
      
      return;
    }

   
    const cardElement = elements.getElement(CardElement);

    
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess('')
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setPaymentSuccess(paymentMethod)
      setPaymentError('')
        
    }
  };

  return (
      <>
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>

    </form>
    {
      paymentError &&   <p className="text-danger">{paymentError}</p>
    }
    {
        paymentSuccess && <p className="text-success">Thank you For Payment</p>
    }

    <p>Pay securely by mobile banking (bKash, rocket, etc) or credit/debit card or internet banking through SSLCommerz secure servers.</p>

    <input type="checkbox"/>
    <span> I have read and agree to the website terms and conditions *</span>
    <br/>
    <br/>
    <button onClick={handlePlace} className="btn btn-success form-control">Place Order</button>
    </>
    
  );
};
export default SimpleCartForm