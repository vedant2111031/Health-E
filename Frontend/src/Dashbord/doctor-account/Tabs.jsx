import { useContext, useState } from "react";
import { BiMenu, BiArrowBack } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { BASE_URL, getToken } from "../../config";
import { toast } from "react-toastify";

const Tabs = ({ tab, setTab }) => {
  const { user, dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.reload();
    navigate("/");
  };

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (confirmDelete) {
      try {
        const token = getToken();
        const res = await fetch(`${BASE_URL}/doctors/${user._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          const result = await res.json();
          throw Error(result.message);
        }
        dispatch({ type: "LOGOUT" });
        toast.success("Account deleted successfully.");
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    }
  };

  return (
    <div className="mx-[3px] mr-2">
      {/* Mobile Hamburger */}
      <span className="lg:hidden" onClick={toggleMobileMenu}>
        <BiMenu className="w-7 h-7 cursor-pointer" />
      </span>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 lg:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center p-4 border-b border-gray-200">
          <BiArrowBack
            className="w-6 h-6 cursor-pointer mr-3"
            onClick={toggleMobileMenu}
          />
          <h2 className="text-lg font-semibold">Account</h2>
        </div>

        {/* Drawer Content */}
        <div className="flex flex-col p-4 gap-0"> 
          <button
            onClick={() => {
              setTab("overview");
              toggleMobileMenu();
            }}
            className={`${tab === "overview" ? "bg-indigo-100 text-primaryColor" : "bg-transparent text-headingColor"} w-full btn rounded-md`}
          >
            Overview
          </button>

          <button
            onClick={() => {
              setTab("appointments");
              toggleMobileMenu();
            }}
            className={`${tab === "appointments" ? "bg-indigo-100 text-primaryColor" : "bg-transparent text-headingColor"} w-full btn rounded-md`}
          >
            Appointments
          </button>

          <button
            onClick={() => {
              setTab("settings");
              toggleMobileMenu();
            }}
            className={`${tab === "settings" ? "bg-indigo-100 text-primaryColor" : "bg-transparent text-headingColor"} w-full btn rounded-md`}
          >
            Profile
          </button>

          {/* Removed mt-auto so they stay close */}
          <div className="pt-4">
            <button
              onClick={handleLogout}
              className="w-full text-white bg-[#181A1E] p-3 rounded-md"
            >
              Logout
            </button>
            <button
              onClick={handleDeleteAccount}
              className="w-full text-white bg-red-600 mt-2 p-3 rounded-md"
            >
              Delete account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

