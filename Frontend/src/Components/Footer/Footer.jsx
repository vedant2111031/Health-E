import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo01.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
  AiFillInstagram,
} from "react-icons/ai";

const Links = [
  {
    label: "YouTube",
    path: "https://www.youtube.com/",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    label: "GitHub",
    path: "https://github.com/vedant2111031",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    label: "Instagram",
    path: "https://www.instagram.com/",
    icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    label: "LinkedIn",
    path: "https://www.linkedin.com/in/vedant-pandey7/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];


const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/doctors",
    display: "Request an Appointment",
  },
  {
    path: "/services",
    display: "Use MRI Diagnosis",
  },
  {
    path: "/",
    display: "Get an Opinion",
  },
];
const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const pushFooterLinkClick = (label, url) => {
  const isAbsoluteUrl = url.startsWith("http");
  const fullUrl = isAbsoluteUrl ? url : `${window.location.origin}${url}`;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "web.webinteractionlink.click",
    web: {
      componentname: "footer",
      interactiontype: "link click",
      link: {
        section: "footer",
        text: label.toLowerCase() || "unknown",
        url: fullUrl,
      },
    },
  });
};



 const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px] container mx-auto">
          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor">
              Copyright {year} developed by D-CODER.
            </p>

            {/* ✅ SOCIAL ICONS */}
            <div className="flex items-center gap-3 mt-4">
              {Links.map((link, index) => (
                <a
                  href={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => pushFooterLinkClick(link.label, link.path)}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ✅ QUICK LINKS 1 */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                    onClick={() => pushFooterLinkClick(item.display, item.path)}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ QUICK LINKS 2 */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Can
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                    onClick={() => pushFooterLinkClick(item.display, item.path)}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ QUICK LINKS 3 */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                    onClick={() => pushFooterLinkClick(item.display, item.path)}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
