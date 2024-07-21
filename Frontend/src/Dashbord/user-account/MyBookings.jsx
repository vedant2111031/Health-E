import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from '../../Components/Doctors/DoctorCard';
import Loading from "../../Components/Loader/Loading";
import Error from "../../Components/Error/Error";
import { BsClock } from "react-icons/bs";
import { FaCheckCircle, FaExclamationCircle, FaTimesCircle } from "react-icons/fa";

const MyBookings = () => {
  const { data: appointments, loading, error } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

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

  if (loading) return <Loading />;
  if (error) return <Error errMessage={error} />;

  return (
    <div className="mt-5">
      {appointments.length === 0 ? (
        <h2 className="mt-5 text-center text-primaryColor leading-7 text-[20px]">
          You did not book any doctor yet!
        </h2>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map((appointment, index) => (
            appointment?.doctor ? (
              <div key={appointment.doctor._id || index} className="relative p-4 border rounded-lg shadow-sm">
                <DoctorCard doctor={appointment.doctor} />
                <div className="absolute top-2 right-2 flex items-center">
                  <BsClock className="mr-1" />
                  <span>{appointment.timeSlot || "No time slot available"}</span>
                </div>
                <div className="absolute bottom-2 left-2 flex items-center">
                  {getStatusIcon(appointment.status)}
                  <span className="ml-2 text-sm">{appointment.status}</span>
                </div>
              </div>
            ) : null
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
