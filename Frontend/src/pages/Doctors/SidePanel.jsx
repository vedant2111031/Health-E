import { toast } from "react-toastify";
import { useState } from "react";
import { BASE_URL, token } from "../../config";
import convertTime from "../../utils/convertTime";

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const [isLoading, setIsLoading] = useState(false);

  const bookingHandler = async () => {
    if (!token) {
      toast.error("Authorization token is missing");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const datas = await res.json();

      if (!res.ok) {
        throw new Error(datas.message || 'Something went wrong. Please try again.');
      }

      if (datas.data?.url) {
        window.location.href = datas.data.url;
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

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
          {timeSlots?.map((item) => (
            <li key={item.id} className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <button 
        onClick={bookingHandler} 
        className="btn px-2 w-full rounded-md" 
        disabled={isLoading}
      >
        {isLoading ? 'Booking...' : 'Book Appointment'}
      </button>
    </div>
  );
};

export default SidePanel;
