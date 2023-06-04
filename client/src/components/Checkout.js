import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default function Checkout(subtotal) {
    
  function tokenHandler(token) {
    console.log(token);
  }
  return (
    <div>
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey=""
        currency="INR"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
