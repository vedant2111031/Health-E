import { toast } from "react-toastify";
import { useState } from "react";
import { BASE_URL, token } from "../../config";
import convertTime from "../../utils/convertTime";
import Stripe from "stripe";

const stripe = Stripe("stripe publickey");

const SidePanel = ({doctorId,ticketPrice,timeSlots}) => {
  const [isBookingLoading , setIsBookingLoading] = useState(false);
    const bookingHandler=async()=>{
    

      try {
        setIsBookingLoading(true);
  
        const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
          method: 'post',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Ensure correct content type
          }
        });
  
        const data = await res.json();
  
        if (!res.ok) {
          throw new Error(data.message + ' Please try again');
        }
  
        // Use stripe.confirmCardPayment to handle payment
        const { error } = await stripe.confirmCardPayment(data.clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: 'Jenny Rosen',
            },
          }
        });
  
        if (error) {
          console.error(error.message);
          toast.error('Payment failed: ' + error.message);
        } else {
          toast.success('Payment successful!');
          // Redirect or show success message as needed
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsBookingLoading(false);
      }
  }
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} INR
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">
         {timeSlots?.map((item,index)=>(
          <li key={index} className="flex items-center justify-between mb-2">
          <p className="text-[15px] leading-6 text-textColor font-semibold">
            {item.day.charAt(0).toUpperCase()+item.day.slice(1)}
          </p>
          <p className="text-[15px] leading-6 text-textColor font-semibold">
            {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
          </p>
        </li>
         ))}
        </ul>
      </div>
      <button onClick={bookingHandler} className="btn px-2 w-full rounded-md" disabled={isBookingLoading}> {isBookingLoading ? 'Booking...' : 'Book Appointment'}</button>
    </div>
  );
};

export default SidePanel;
