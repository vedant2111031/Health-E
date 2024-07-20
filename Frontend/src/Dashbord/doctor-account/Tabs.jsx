import {useContext} from "react";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom"; 
import { BASE_URL,getToken } from "../../config";
import { toast } from "react-toastify";


const Tabs = ({ tab, setTab }) => {
  const { user,dispatch } = useContext(authContext);
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.reload();
    navigate('/');
  };

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (confirmDelete) {
      try {
        const token=getToken()
        const res = await fetch(`${BASE_URL}/doctors/${user._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (!res.ok) {
          const result= await res.json();
          throw Error(result.message)
        } 
           dispatch({ type: "LOGOUT" });
          toast.success("Account deleted successfully.");
        
      } catch (err) {
        console.log(err)
        toast.error(err.message);
      }
    }
  };

  return (
    <div className="mx-[3px] mr-2">
      <span className="lg:hidden ">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md w-[300px]">
        <button
          onClick={() => setTab('overview')}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab('appointments')}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab('settings')}
          className={`${
            tab === "settings"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Profile
        </button>
        <div className="mt-[100px] w-full">
          <button
            onClick={handleLogout}
            className="w-full text-white  bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md "
          >
            Logout
          </button>
          <button
            onClick={handleDeleteAccount}
            className="w-full text-white  bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md"
          >
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
