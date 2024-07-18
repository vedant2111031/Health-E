import { useState } from 'react';
import { toast } from 'react-toastify';
import { BASE_URL, getToken} from "../../config";
import convertTime from "../../utils/convertTime";



const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTimeSlotId, setSelectedTimeSlotId] = useState("");



  const handleTimeSlotChange = (e) => {
    const selectedId = e.target.value;
    setSelectedTimeSlotId(selectedId);
   
  };

  const bookingHandler = async (e) => {
    e.preventDefault();
    const token=getToken()
    if (!token || token==null || token==undefined) {
      toast.error("Authorization token is missing");
      return;
    }

    if (!selectedTimeSlotId) {
      toast.error("Please select a time slot.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timeSlot: selectedTimeSlotId,
          ticketPrice,
        }),
      });
     
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      if (data.data?.url) {
        window.location.href = data.data.url;
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
        <select 
          onChange={handleTimeSlotChange} 
          value={selectedTimeSlotId} 
          className="form__input py-3.5 mt-3" 
          aria-label="Select a time slot"
        >
          <option value="">Select a Time Slot</option>
          {timeSlots?.map((slot) => (
            <option key={slot.id} value={slot.id}>
              {slot.day.charAt(0).toUpperCase() + slot.day.slice(1)}: {convertTime(slot.startingTime)} - {convertTime(slot.endingTime)}
            </option>
          ))}
        </select>
      </div>
      <button 
        onClick={bookingHandler} 
        className="btn px-2 w-full rounded-md mt-5" 
        disabled={isLoading} 
        aria-label="Book appointment"
      >
        {isLoading ? 'Booking...' : 'Book Appointment'}
      </button>
    </div>
  );
};

export default SidePanel;
