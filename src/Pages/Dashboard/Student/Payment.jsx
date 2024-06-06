import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

import useSelectedClasses from "../../../hooks/useSelectedClasses";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [selectedClasses, refetch] = useSelectedClasses();

  const location = useLocation();
  const Id = location?.state;
  console.log("data by link", location?.state);
  const selected = selectedClasses?.find((item) => item.classId === Id);

  return (
    <div className="w-full p-6">
      <Helmet>
        <title>ARTVENTURE ACADEMY | Payment</title>
      </Helmet>
      <div>
        <SectionTitle subTitle="" title="Payment"></SectionTitle>
        {selected && (
          <div className=" overflow-y-auto">
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
