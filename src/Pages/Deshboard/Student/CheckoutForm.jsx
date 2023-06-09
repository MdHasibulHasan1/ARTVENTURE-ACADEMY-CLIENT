import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import "./CheckoutForm.css";
const CheckoutForm = ({ selectedClass, closeModal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  //   1.  get clientSecret from backend
  useEffect(() => {
    if (selectedClass.price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: selectedClass.price })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [selectedClass, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log('payment method', paymentMethod)
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    }

    console.log("payment intent", paymentIntent);

    if (paymentIntent.status === "succeeded") {
      // save payment information to the server
      const paymentInfo = {
        ...bookingInfo,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      axiosSecure.post("/bookings", paymentInfo).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          updateStatus(bookingInfo.roomId, true)
            .then((data) => {
              setProcessing(false);
              console.log(data);
              const text = `Booking Successful!, TransactionId: ${paymentIntent.id}`;
              toast.success(text);
              navigate("/dashboard/my-bookings");
              closeModal();
            })
            .catch((err) => console.log(err));
        }
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-primary" type="submit" disabled={!stripe}>
          Pay
        </button>
        <button className="btn btn-primary mt-4" onClick={closeModal}>
          Close
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </>
  );
};
export default CheckoutForm;
