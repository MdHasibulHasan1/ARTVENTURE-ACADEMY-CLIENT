import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

import useSelectedClasses from "../../../hooks/useSelectedClasses";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useMyEnrolledClasses from "../../../hooks/useMyEnrolledClasses";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const { Id } = useParams();
  const [selectedClasses, refetch] = useSelectedClasses();
  console.log(selectedClasses);

  const selected = selectedClasses.find((item) => item.classId === Id);
  console.log(selected);
  return (
    <div className="w-full p-6">
      <Helmet>
        <title>ARTVENTURE ACADEMY | Payment</title>
      </Helmet>
      <div>
        {selected && (
          <div className="">
            <div className=" bg-gray-900 "></div>
            <div className="bg-white  rounded-lg">
              <h2 className="text-xl font-semibold mb-4">
                Payment Information
              </h2>
              <p>
                Class: <strong>{selected.className}</strong>
              </p>
              <p>
                Instructor: <strong>{selected.instructorName}</strong>
              </p>
              <p>
                Price: <strong>{selected.price}</strong>
              </p>
            </div>
          </div>
        )}
        <Elements stripe={stripePromise}>
          <CheckoutForm
            selected={selected}
            price={selected?.price}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
