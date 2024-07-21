import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from '../../Components/Doctors/DoctorCard';
import Loading from "../../Components/Loader/Loading";
import Error from "../../Components/Error/Error";
import { BsClock } from "react-icons/bs";
import { FaCheckCircle, FaExclamationCircle, FaTimesCircle } from "react-icons/fa";

const MyBookings = () => {
  const { data : appointments, loading, error } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  // Log the data to inspect its structure
  console.log('Appointments Data:', appointments);

  // Function to return the appropriate status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return <FaCheckCircle className="text-green-500" />;
      case 'pending':
        return <FaExclamationCircle className="text-yellow-500" />;
      case 'cancelled':
        return <FaTimesCircle className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-5">
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}
      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map((appointment) => (
            <div key={appointment._id} className="relative p-4 border rounded-lg shadow-sm">
              <DoctorCard doctor={appointment} />
              <div className="absolute top-2 right-2 flex items-center">
                <BsClock className="mr-1" />
                <span>
                  {appointment.timeSlots && appointment.timeSlots.length > 0
                    ? `${appointment.timeSlots[0].day}, ${appointment.timeSlots[0].startingTime} - ${appointment.timeSlots[0].endingTime}`
                    : "No time slot available"}
                </span>
              </div>
              <div className="absolute bottom-2 left-2 flex items-center">
                {getStatusIcon(appointment.isApproved)}
                <span className="ml-2 text-sm">{appointment.isApproved}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      {!loading && !error && appointments.length === 0 && (
        <h2 className="mt-5 text-center text-primaryColor leading-7 text-[20px]">
          You did not book any doctor yet!
        </h2>
      )}
    </div>
  );
};

export default MyBookings;
