import React from "react";
import CardForm from "./CardForm";
import { Elements, StripeProvider } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
//import { app } from "../base";

export default function BuySection(props) {

  // const stripePromise = loadStripe("pk_test_51JCKc2FWStq0r5ZwXgPXFw7sO5w8DnXYhyMoA8vmDt8VyXGYOumsERIHQMTWf7kKCyeBQJHlYWw1E2uqcUeyvhu600F11rn8ek");

  return (
    <div>
      <StripeProvider apiKey="pk_test_51JCKc2FWStq0r5ZwXgPXFw7sO5w8DnXYhyMoA8vmDt8VyXGYOumsERIHQMTWf7kKCyeBQJHlYWw1E2uqcUeyvhu600F11rn8ek">
      <Elements>
        <CheckoutForm />
      </Elements>
      <main>
      </main>
      </StripeProvider>
    </div>
    
  );
}