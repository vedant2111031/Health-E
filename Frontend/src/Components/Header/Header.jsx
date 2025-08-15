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
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

function Header() {
  const { user, role, token, dispatch } = useContext(authContext);

  const [shouldFetchUser, setShouldFetchUser] = useState(true);

  const { data: userData, loading, setData: setUserData } = useFetchData();

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
      setShouldFetchUser(false);
    } else {
      setShouldFetchUser(true);
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

 const pushDataLayerEvent = (text, relativeUrl) => {
  const fullUrl = new URL(relativeUrl, window.location.origin).href;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "web.webinteractionlink.click",
    web: {
      interactiontype: "link click",
      link: {
        text: text.toLowerCase(),
        url: fullUrl.toLowerCase(),
        section: "header",
      },
      componentname: "header",
    },
  });
};


  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" onClick={() => pushDataLayerEvent("Logo", "/")}>
              <img src={logo} alt="Logo" className="max-w-[160px] cursor-pointer" />
            </Link>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    end
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                    onClick={() => pushDataLayerEvent(link.display, link.path)}
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
                <Link
                  to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}
                  onClick={() =>
                    pushDataLayerEvent("Profile", role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me')
                  }
                >
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    {!loading && (
                      <img
                        src={user?.photo || defaultPhoto}
                        className="w-full rounded-full"
                        alt="User"
                      />
                    )}
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/login" onClick={() => pushDataLayerEvent("Login", "/login")}>
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
