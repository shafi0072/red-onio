import React from 'react';
import { useForm } from 'react-hook-form';
import './Checkout.css';
import { useAuth } from '../Login/useAuth';
import {loadStripe} from '@stripe/stripe-js';
import{ Elements}  from '@stripe/react-stripe-js'
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = (props) => {
     const { register, handleSubmit, errors } = useForm();
     const auth = useAuth();
     const onSubmit = data => console.log(data);

     const stripePromise = loadStripe('pk_test_s4xxHkyau47Qd1Oiuyn3DRjk00bx1Jjjmc');


     
   
    return (
        <div className="container">
        <div className="row">
          <div style={{}} className="col-md-6">
            <h3 style={{marginLeft:'40px' ,marginTop:'25px'}}>Shipping Information</h3>
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                name="name"
                defaultValue={auth.user.name}
                ref={register({ required: true })}
                placeholder="Name"
              />
  
              {errors.name && <span className="error">Name is required</span>}
  
              <input
                name="email"
                defaultValue={auth.user.email}
                ref={register({ required: true })}
                placeholder="Email"
              />
              {errors.email && <span className="error">Email is required</span>}
  
              <input
                name="phone"
                ref={register({ required: true })}
                placeholder="Phone Number"
              />
              {errors.phone && (
                <span className="error">Phone Number is required</span>
              )}
  
              <input
                name="addressLine1"
                ref={register({ required: true })}
                placeholder="Address Line 1"
              />
              {errors.addressLine1 && (
                <span className="error">Address is required</span>
              )}
  
              <input
                name="addressLine2"
                ref={register}
                placeholder="Address Line 2"
              />
  
              <input
                name="city"
                ref={register({ required: true })}
                placeholder="City"
              />
              {errors.city && <span className="error">City is required</span>}
  
              <input
                name="country"
                ref={register({ required: true })}
                placeholder="Country"
              />
              {errors.country && (
                <span className="error">Country is required</span>
              )}
  
              <input
                name="zip"
                ref={register({ required: true })}
                placeholder="Zip Code"
              />
              {errors.zip && <span className="error">Zip code is required</span>}
  
              <input className="btn btn-danger" type="submit" />
            </form>
          </div>
          <div style={{'marginTop' : '100px', display: "block" }} 
          className="col-md-6">
            <h3 style={{margin:'20px'}}>Payment Information</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm/>
            </Elements>
        
          </div>
        </div>
      </div>
    );
  };
export default Checkout;