import React, { useState } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";

const CheckOut = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
      //   redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
    }
    // } else if (paymentIntent && paymentIntent.status === "succeeded") {
    //   setMessage("Payment status: " + paymentIntent.status + "🎉");
    // }
    setIsProcessing(false);
  };
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h2 className="font-bold text-[2rem]  mb-12">
        A Payment Method With Stripe
      </h2>
      <div className="max-w-[40rem] w-[30rem] rounded-lg bg-white shadow-xl p-10">
        <form onSubmit={handleSubmit} className=" ">
          <PaymentElement />
          <button
            disabled={isProcessing}
            id="submit"
            className="px-5 py-2 bg-black mb-3 text-white mt-5 rounded-md hover:text-white hover:bg-[#484848]"
          >
            <span>{isProcessing ? "Processing" : "Pay Now"}</span>
          </button>
          {/* <p>A payment method</p> */}
        </form>
        {message && <div id="payment-message">{message}</div>}
      </div>
    </section>
  );
};

export default CheckOut;
