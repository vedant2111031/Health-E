import { useEffect, useRef, useContext, useState } from "react";
import logo from "../../assets/images/logo01.png";
import defaultPhoto from "../../assets/images/user.png"; 
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import useFetchData from "../../hooks/useFetchData"; 
import { BASE_URL } from "../../config";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

function Header() {
  const { user, role, token, dispatch } = useContext(authContext);

  const [shouldFetchUser, setShouldFetchUser] = useState(true); // State to trigger user data fetching

  const { data: userData, loading, setData: setUserData } = useFetchData(); // Ensure useFetchData returns setData

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  useEffect(() => {
    if (!token) {
      setShouldFetchUser(false); // Reset shouldFetchUser state if not authenticated
    } else {
      setShouldFetchUser(true); // Trigger user data fetching when authenticated
    }
  }, [token]);

  useEffect(() => {
    if (shouldFetchUser && token) {
      const apiUrl = role === "doctor" ? `${BASE_URL}/doctors/profile/me` : `${BASE_URL}/users/profile/me`;
     
      if (setUserData) {
        setUserData(apiUrl); 
      }
    }
  }, [shouldFetchUser, token, role, setUserData]);

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="Logo" className="max-w-[160px]" />
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    {!loading && <img src={user?.photo || defaultPhoto} className="w-full rounded-full" alt="User" />}
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to='/login'>
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
