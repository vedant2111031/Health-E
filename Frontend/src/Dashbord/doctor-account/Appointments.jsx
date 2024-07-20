import React, { useState } from "react";
import { formateDate } from "../../utils/formateDate";
import { AiOutlineDelete } from "react-icons/ai";
import { BASE_URL, getToken } from "../../config";
import { toast } from "react-toastify";

const Appointments = ({ initialAppointments }) => {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [statusState, setStatusState] = useState({});

  const handleStatusChange = async(id, event) => {
    const newStatus = event.target.value;

    setStatusState((prevStatus) => ({
      ...prevStatus,
      [id]: { status: newStatus, changed: true },
    }));

    
    const token=getToken()
    try {
      const res = await fetch(`${BASE_URL}/bookings/statusChange/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({newStatus}),
      });

      const result=await res.json()

      if(!res.ok){
        throw Error(result.message)
      }

      toast.success(`Status changed to ${newStatus}`);
    }catch(error){
      console.log(error);
      toast.error(error.message);
    }


  };

  const handleDelete = async (id, index) => {
    const token = getToken();

    try {
      const res = await fetch(`${BASE_URL}/bookings/deleteBooking/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();

      if (!res.ok) {
        throw Error(result.message);
      }

      // Update the state to remove the deleted appointment
      setAppointments((prevAppointments) => 
        prevAppointments.filter((_, i) => i !== index)
      );

      toast.success(result.message);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="ml-[-5rem] ">
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Gender</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">Booked On</th>
            <th scope="col" className="px-6 py-3">Time Slot</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Delete Data</th>
          </tr>
        </thead>
        <tbody>
          {appointments?.map((item, index) => (
            <tr key={item._id}>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
              >
                <img src={item.user.photo} className="w-10 h-10 rounded-full" alt="" />
                <div className="pl-3">
                  <div className="text-base font-semibold">{item.user.name}</div>
                  <div className="text-normal text-gray-500">{item.user.email}</div>
                </div>
              </th>
              <td className="px-6 py-4">{item.user.gender}</td>
              <td className="px-6 py-4">{item.ticketPrice}</td>
              <td className="px-6 py-4">{formateDate(item.createdAt)}</td>
              <td className="px-6 py-4">{item.timeSlot}</td>
              <td className="px-6 py-4">
                <select
                  value={statusState[item._id]?.status || item.status || "pending"}
                  onChange={(event) => handleStatusChange(item._id, event)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                  style={{ minWidth: "120px" }}
                  disabled={statusState[item._id]?.changed || item.status === "approved" || item.status === "cancelled"}
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </td>

              <td className="px-6 py-4">
                <button
                  onClick={() => handleDelete(item._id, index)}
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
