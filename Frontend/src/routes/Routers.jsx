import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Doctor from "../pages/Doctors/Doctor";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import MyAccount from "../Dashbord/user-account/MyAccount";
import Dashbord from "../Dashbord/doctor-account/Dashbord";
import CheckoutSuccess from "../pages/Doctors/CheckoutSuccess";
import Newsy from "../Components/Blog/Newsy";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import MriDiagnosis from "../pages/MriDiagnosis";
import TumorDetection from "../pages/TumorDetection";
import AlzheimerDetection from "../pages/AlzheimerDetection";
import HemorrhageDetection from "../pages/HemorrhageDetection";
import Result from "../pages/MRIResult";
import { pushPageViewData } from "../components/pageViewTracker"; 

function Routers() {
   const location = useLocation();

  useEffect(() => {
    pushPageViewData(location.pathname);
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/doctors" element={<Doctor />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<MriDiagnosis />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route path="/blog" element={<Newsy/>} />
      <Route path="/mri-diagnosis" element={<MriDiagnosis />} />
      <Route path="/tumor-detection" element={<TumorDetection />} />
      <Route path="/alzheimer-detection" element={<AlzheimerDetection />} />
      <Route path="/hemorrhage-detection" element={<HemorrhageDetection/>} />
      <Route path="/result" element={<Result/>} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <Dashbord />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default Routers;
