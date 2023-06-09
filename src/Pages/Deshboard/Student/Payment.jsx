import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

import useSelectedClasses from "../../../hooks/useSelectedClasses";

// TODO: provide publishable Key
const stripePromise = loadStripe(
  "sk_test_51NGnG2FH86hix4QnGpciGxcS6ufwrWPtIiMeBJ01t2oBjTVAzLG3sSzLCZHObOuXyQ8SIrYtPKcSG96VmZx78YfI007V0TjCbP"
);
const Payment = () => {
  const [selectedClasses, refetch] = useSelectedClasses();
  const total = selectedClasses.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <h2 className="text-3xl">payment...</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          selectedClass={selectedClasses}
          price={price}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
