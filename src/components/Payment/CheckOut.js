import React, { useState } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";

const CheckOut = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={isProcessing} id="submit">
        <span>{isProcessing ? "Processing" : "Pay Now"}</span>
      </button>
      <p>A payment method</p>
    </form>
  );
};

export default CheckOut;
