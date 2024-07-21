import React from "react";
import hero from "../assets/images/hero.png";
import hero2 from "../assets/images/hero2.png";
import icon1 from "../assets/images/icon01.png";
import icon2 from "../assets/images/icon02.png";
import icon3 from "../assets/images/icon03.png";
import faq from "../assets/images/faq2.png";
import feature1 from "../assets/images/features1.png";
import videoIcon from "../assets/images/video-icon.png";
import user from "../assets/images/user.png";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../Components/About/About";
import ServicesList from "../Components/Services/ServicesList";
import FaqList from "../Components/Faq/FaqList";
import TestimonialComponent from "../Components/Testimonials/Testimonials";
import DoctorList from "../Components/Doctors/DoctorList";
import { FaUsers, FaUserMd } from "react-icons/fa";
const Home = () => {
  const navigate = useNavigate();

  const handleRequestAppointment = () => {
    navigate("/doctors");
  };
  return (
    <>
      <section className="hero__section pt-[40px] pb-[40px] 2xl:h-[800px] shadow-lg">
        <div className="max-w-full w-[1440px] px-8 mx-auto ">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[500px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[700] md:text-[50px] md:leading-[60px]">
                  We follow a holistic approch to health care.
                </h1>
                <p className="text__para text-[18px] leading-[30px] font-[400]">
                  Health-E is a pioneering platform dedicated to enhancing your
                  healthcare experience. With access to a vast network of
                  top-rated doctors, both physically and virtually.
                  <br />
                  Our advanced search tools help you find doctors based on your
                  specific needs and preferences, while our comprehensive
                  medicine finder assists in locating and obtaining
                  prescriptions efficiently. <br />
                  Trust Health-E for a modern, user-friendly approach to
                  managing your health and wellness.
                </p>
                <button onClick={handleRequestAppointment} className="btn">
                  Request an Appointment
                </button>
              </div>
              
            </div>
            <div className="flex gap-[30px] justify-end">
              <div className="relative flex flex-col w-full max-w-xs  mx-auto rounded-lg ">
                <img className="w-full object-cover" src={hero} alt="" />
                <div className="absolute bottom-[180px] flex items-center space-x-2 bg-white rounded-md shadow">
                  <FaUsers className="text-blue-500" />
                  <span className="text-lg font-semibold">
                    10K+ Happy Patients
                  </span>
                  
                </div>
              </div>
              <div className="mt-[30px] relative">
                <img src={hero2} alt="" />
                <div className="absolute top-4 right-5 flex items-center space-x-2 bg-white p-2 rounded-md shadow">
                    <FaUserMd className="text-blue-500" />
                    <span className="text-lg font-semibold">
                      5k+ Expert Doctors
                    </span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shadow-md">
        <div className="container my-14">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              World class care for everyone.Our health system offers
              unmatched,expert health care.
            </p>
          </div>

          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex item-center justify-center">
                <img src={icon1} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Health-E connects you to a wide array of top-rated doctors,
                  offering both physical and virtual consultation options.
                  Whether you need an in-person examination or a virtual
                  consultation. Experience convenience and excellence in
                  healthcare with seamless integration of both physical and
                  virtual doctor interactions.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex item-center justify-center">
                <img src={icon2} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Health-E simplifies finding your preferred doctor with its
                  intuitive location-based search. Easily locate top-rated
                  physicians near you. Our platform provides detailed
                  information on each doctor's. Discover the best healthcare
                  professionals in your area with just a few clicks.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex item-center justify-center">
                <img src={icon3} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Virtual Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Health-E offers the convenience of virtual appointments,
                  allowing you to consult with top doctors from anywhere.
                  Schedule video calls with your chosen healthcare providers
                  without leaving your home, ensuring accessibility and comfort.
                  Enjoy seamless and effective care with our user-friendly
                  virtual consultation services.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      {/* services */}
      <section className="shadow-md">
        <div className="container my-9 ">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text__para text-center">
              World-Class care for everyone.Our health system offers
              unmatched,expert health care support.
            </p>
          </div>
          <ServicesList />
        </div>
      </section>

      {/* features */}
      <section className="container shadow-md pb-6 pt-5">
        <div className="flex items-center justify-between flex-col lg:flex-row mx-8 ">
          <div className="xl:w-[670px]">
            <h2 className="heading">
              Other <br />
              Features.
            </h2>
            <ul className="pl-4">
              <li className="text__para">1-Schedule the Appointment.</li>
              <li className="text__para">2-Get in touch with your Doctor.</li>
              <li className="text__para">3-Get virtual assistance</li>
              <li className="text__para">3-Get you Reports and records</li>
              <li className="text__para">4-View the online schedule.</li>
            </ul>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={feature1} alt="" />
            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] right-[-30px] md:bottom-[100px] ms-0left-5 z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px] rounded-[10px] shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                    Tue,24
                  </p>
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                    12:00PM
                  </p>
                </div>
                <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                  <img src={videoIcon} alt="" />
                </span>
              </div>
              <div className="w-[65px] lg:w-[96px] bg-[#1C6BA4] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-white font-[500] mt-2 lg:mt-4 rounded-full">
                Consultation
              </div>
              <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                <img src={user} alt="" />
                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                  Ashish Mishra
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shadow-md">
        <div className="container pt-9">
          <div className="flex justify-between gap-[50px] lg:gap-">
            <div className="w-[500px] mt-[80px] mb-[50px] hidden md:block ">
              <img src={faq} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Frequently asked questions.</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="xl:w-[470px] mx-auto py-6">
          <h2 className="heading text-center">What Our patient Says...</h2>
          <p className="text__para text-center">
            World-class care for everyone.Our health System offers
            unmatched,expert health care.
          </p>
        </div>
        <TestimonialComponent />
      </section>
    </>
  );
};

export default Home;
