import { React, useContext, useState } from "react";
import userImg from "../../assets/images/doctorImg03.png";
import { authContext } from "../../context/AuthContext";
import Loading from "../../Components/Loader/Loading";
import MyBookings from "./MyBookings";
import Profile from "./Profile";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Error from "../../Components/Error/Error";

const MyAccount = () => {
  const [tab, setTab] = useState("bookings");
  const { dispatch } = useContext(authContext);
//check this
  const {
    data: userData,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/user/profile/me`);


  console.log(userData,'userdata');

  const handleLogout = () => {
    dispatch({ type: "Logout" });
  };

  return (
    <section className="pt-5">
      <div className="max-w-[1170px] px-5 mx-auto mt-5">
        {loading &&!error&& <Loading/>}
        {error&&!loading&& <Error errMessage={error}/> }
        
        {
            !loading && error && <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                  <img
                    src={userImg}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </figure>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                  Ashish Mishra
                </h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  example@gmail.com
                </p>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  Blood Type:
                  <span className="ml-2 text-headingColor text-[22px] leading-8">
                    B+
                  </span>
                </p>
              </div>
              <div className="mt-[50px] md:mt-[100px] flex flex-col items-center">
                <button
                  onClick={handleLogout}
                  className="text-white w-1/2 bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md"
                >
                  Logout
                </button>
                <button className="text-white w-1/2 bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md">
                  Delete account
                </button>
              </div>
            </div>
            <div className="md:col-span-2 md:px-[30px]">
              <div>
                <button
                  onClick={() => setTab("bookings")}
                  className={`${
                    tab === "bookings" && "bg-primaryColor text-white font-normal"
                  } p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  My Bookings
                </button>
                <button
                  onClick={() => setTab("settings")}
                  className={`${
                    tab === "settings" && "bg-primaryColor text-white font-normal"
                  } p-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Profile Settings
                </button>
              </div>
              {tab === "bookings" && <MyBookings />}
              {tab === "settings" && <Profile />}
            </div>
          </div>
        }

        
      </div>
    </section>
  );
};

export default MyAccount;
