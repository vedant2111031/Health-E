import {useContext} from "react";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom"; 
import { BASE_URL,getToken } from "../../config";

const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(authContext);
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
        // console.log('Attempting to delete account...');
        // console.log('URL:', `${BASE_URL}/users/profile/me`);
        // console.log('Token:', token);
        const token=getToken()
        const response = await fetch(`${BASE_URL}/doctors/profile/me`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (response.ok) {
          dispatch({ type: "LOGOUT" });
          alert("Account deleted successfully.");
          window.location.reload();
        } else {
          const errorData = await response.json();
          console.error('Delete account error:', errorData);
          alert(`Error: ${errorData.message}`);
        }
      } catch (error) {
        console.error('Fetch error:', error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="mx-[3px]">
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
