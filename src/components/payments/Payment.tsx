import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import type { StripeElementsOptions } from "@stripe/stripe-js";

import axios from "axios";

export default function PaymentPage() {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Load PaymentIntent client secret
  useEffect(() => {
    axios
      .post("/create-payment-intent", { amount: 49800 })
      .then((res) => setClientSecret(res.data.clientSecret))
      .catch((err) => setErrorMsg("Unable to load payment form"));
  }, []);

  // Stripe Appearance + Layout
  const appearance: StripeElementsOptions["appearance"] = {
    theme: "stripe",
    variables: {
      colorPrimary: "#f97316",
      borderRadius: "8px",
    },
  };

  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
    loader: "auto",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;
    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
      },
      redirect: "if_required",
    });

    if (error) {
      setErrorMsg(error.message ?? "Payment failed");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Complete Payment</h1>

      {/* Stripe Payment Element */}
      {clientSecret ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border p-4 rounded-lg shadow-sm">
            <PaymentElement options={options} />
          </div>

          {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}

          <button
            disabled={!stripe || loading}
            className="w-full bg-orange-600 text-white py-3 rounded-md font-semibold hover:bg-orange-700 disabled:opacity-50"
          >
            {loading ? "Processing…" : "Pay ₹498"}
          </button>
        </form>
      ) : (
        <p>Loading payment...</p>
      )}
    </div>
  );
}
