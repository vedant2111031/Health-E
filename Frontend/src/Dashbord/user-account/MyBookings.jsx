import useFetchData from "../../hooks/useFetchData"
import { BASE_URL } from "../../config"
import DoctorCard from '../../Components/Doctors/DoctorCard';
import Loading from "../../Components/Loader/Loading";
import Error from "../../Components/Error/Error";

const MyBookings=()=> {
    const {data:appointments,loading,error}=useFetchData(`${BASE_URL}/users/appointments/my-appointments`)
  return (
    <div>
      {loading &&!error&& <Loading/>}
      {error&&!loading&& <Error errMessage={error}/> }
      {!loading&&!error&&(<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {
            appointments.map(doctor=>(
                <DoctorCard doctor={doctor} key={doctor._id}/>
            ))
        }
        </div>)}

        {!loading && !error && appointments.length===0 && <h2 className="mt-5 text-center text-primaryColor leading-7 text-[20px]">
            You did not book any doctor yet!</h2>}
    </div>
  )
}

export default MyBookings
