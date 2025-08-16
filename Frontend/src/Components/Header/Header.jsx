// import { useEffect, useRef, useContext, useState } from "react";
// import logo from "../../assets/images/logo01.png";
// import defaultPhoto from "../../assets/images/user.png";
// import { NavLink, Link } from "react-router-dom";
// import { BiMenu, BiArrowBack } from "react-icons/bi";
// import { authContext } from "../../context/AuthContext";
// import useFetchData from "../../hooks/useFetchData";
// import { BASE_URL } from "../../config";

// const navLinks = [
//   { path: "/home", display: "Home" },
//   { path: "/doctors", display: "Find a Doctor" },
//   { path: "/services", display: "Services" },
//   { path: "/blog", display: "Blog" },
//   { path: "/contact", display: "Contact" },
// ];

// function Header() {
//   const { user, role, token } = useContext(authContext);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [shouldFetchUser, setShouldFetchUser] = useState(true);
//   const { data: userData, loading, setData: setUserData } = useFetchData();

//   const headerRef = useRef(null);

//   const handleStickyHeader = () => {
//     window.addEventListener("scroll", () => {
//       if (
//         document.body.scrollTop > 80 ||
//         document.documentElement.scrollTop > 80
//       ) {
//         headerRef.current.classList.add("sticky_header");
//       } else {
//         headerRef.current.classList.remove("sticky_header");
//       }
//     });
//   };

//   useEffect(() => {
//     handleStickyHeader();
//     return () => window.removeEventListener("scroll", handleStickyHeader);
//   }, []);

//   useEffect(() => {
//     setShouldFetchUser(!!token);
//   }, [token]);

//   useEffect(() => {
//     if (shouldFetchUser && token) {
//       const apiUrl =
//         role === "doctor"
//           ? `${BASE_URL}/doctors/profile/me`
//           : `${BASE_URL}/users/profile/me`;
//       if (setUserData) {
//         setUserData(apiUrl);
//       }
//     }
//   }, [shouldFetchUser, token, role, setUserData]);

//   const pushDataLayerEvent = (text, relativeUrl) => {
//     const fullUrl = new URL(relativeUrl, window.location.origin).href;
//     window.dataLayer = window.dataLayer || [];
//     window.dataLayer.push({
//       event: "web.webinteractionlink.click",
//       web: {
//         interactiontype: "link click",
//         link: {
//           text: text.toLowerCase(),
//           url: fullUrl.toLowerCase(),
//           section: "header",
//         },
//         componentname: "header",
//       },
//     });
//   };

//   return (
//     <header className="header flex items-center" ref={headerRef}>
//       <div className="container mx-auto">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div>
//             <Link to="/" onClick={() => pushDataLayerEvent("Logo", "/")}>
//               <img
//                 src={logo}
//                 alt="Logo"
//                 className="max-w-[160px] cursor-pointer"
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex">
//             <ul className="flex items-center gap-[2.7rem]">
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <NavLink
//                     to={link.path}
//                     end
//                     className={({ isActive }) =>
//                       isActive
//                         ? "text-primaryColor text-[16px] leading-7 font-[600]"
//                         : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
//                     }
//                     onClick={() => pushDataLayerEvent(link.display, link.path)}
//                   >
//                     {link.display}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right Side */}
//           <div className="flex items-center gap-4">
//             {token && user ? (
//               <Link
//                 to={
//                   role === "doctor"
//                     ? "/doctors/profile/me"
//                     : "/users/profile/me"
//                 }
//                 onClick={() =>
//                   pushDataLayerEvent(
//                     "Profile",
//                     role === "doctor"
//                       ? "/doctors/profile/me"
//                       : "/users/profile/me"
//                   )
//                 }
//               >
//                 <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
//                   {!loading && (
//                     <img
//                       src={user?.photo || defaultPhoto}
//                       className="w-full rounded-full"
//                       alt="User"
//                     />
//                   )}
//                 </figure>
//               </Link>
//             ) : (
//               <Link
//                 to="/login"
//                 onClick={() => pushDataLayerEvent("Login", "/login")}
//               >
//                 <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
//                   Login
//                 </button>
//               </Link>
//             )}

//             {/* Mobile Hamburger */}
//             <span className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
//               <BiMenu className="w-6 h-6 cursor-pointer" />
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <>
//           {/* Dark background */}
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-40"
//             onClick={() => setIsMobileMenuOpen(false)}
//           ></div>

//           {/* Side Drawer from Right */}
//           <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300">
//             <div className="flex items-center p-4 border-b border-gray-200">
//               <BiArrowBack
//                 className="w-6 h-6 cursor-pointer mr-3"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               />
//               <h2 className="text-lg font-semibold">Menu</h2>
//             </div>
//             <ul className="flex flex-col p-4 gap-3">
//               {navLinks.map((link, index) => (
//                 <li key={index}>
//                   <NavLink
//                     to={link.path}
//                     end
//                     className={({ isActive }) =>
//                       `block w-full px-4 py-3 rounded-md text-left font-medium transition-colors ${
//                         isActive
//                           ? "bg-indigo-100 text-primaryColor"
//                           : "bg-gray-100 text-headingColor hover:bg-gray-200"
//                       }`
//                     }
//                     onClick={() => {
//                       pushDataLayerEvent(link.display, link.path);
//                       setIsMobileMenuOpen(false);
//                     }}
//                   >
//                     {link.display}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </>
//       )}
//     </header>
//   );
// }

// export default Header;
import { useEffect, useRef, useContext, useState } from "react";
import logo from "../../assets/images/logo01.png";
import defaultPhoto from "../../assets/images/user.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu, BiArrowBack } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/doctors", display: "Find a Doctor" },
  { path: "/services", display: "Services" },
  { path: "/blog", display: "Blog" },
  { path: "/contact", display: "Contact" },
];

function Header() {
  const { user, role, token } = useContext(authContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ build API URL just like MyAccount
  const apiUrl =
    role === "doctor"
      ? `${BASE_URL}/doctors/profile/me`
      : `${BASE_URL}/users/profile/me`;

  // ✅ call useFetchData directly with URL & token
  const {
    data: userData,
    loading,
    error,
  } = useFetchData(token ? apiUrl : null);

  const headerRef = useRef(null);

  const handleStickyHeader = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current?.classList.add("sticky_header");
    } else {
      headerRef.current?.classList.remove("sticky_header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyHeader);
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

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
          {/* Logo */}
          <div>
            <Link to="/" onClick={() => pushDataLayerEvent("Logo", "/")}>
              <img
                src={logo}
                alt="Logo"
                className="max-w-[160px] cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <ul className="flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    end
                    className={({ isActive }) =>
                      isActive
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

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <Link
                to={
                  role === "doctor"
                    ? "/doctors/profile/me"
                    : "/users/profile/me"
                }
                onClick={() =>
                  pushDataLayerEvent(
                    "Profile",
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  )
                }
              >
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  {!loading && (
                    <img
                      src={userData?.photo || defaultPhoto}
                      className="w-full h-full object-cover rounded-full"
                      alt="User"
                    />
                  )}
                </figure>
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => pushDataLayerEvent("Login", "/login")}
              >
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

            {/* Mobile Hamburger */}
            <span
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Dark background */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Side Drawer from Right */}
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300">
            <div className="flex items-center p-4 border-b border-gray-200">
              <BiArrowBack
                className="w-6 h-6 cursor-pointer mr-3"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <h2 className="text-lg font-semibold">Menu</h2>
            </div>
            <ul className="flex flex-col p-4 gap-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    end
                    className={({ isActive }) =>
                      `block w-full px-4 py-3 rounded-md text-left font-medium transition-colors ${
                        isActive
                          ? "bg-indigo-100 text-primaryColor"
                          : "bg-gray-100 text-headingColor hover:bg-gray-200"
                      }`
                    }
                    onClick={() => {
                      pushDataLayerEvent(link.display, link.path);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
