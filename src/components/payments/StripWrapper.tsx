import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_123"); // your publishable key

export default function StripeWrapper({ children }: any) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
