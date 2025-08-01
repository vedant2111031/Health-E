import React from "react";
import hero from "../assets/images/hero.png";
import hero2 from "../assets/images/hero2.png";
import sicon1 from "../assets/images/Clinical-Computer.jpg";
import sicon2 from "../assets/images/accurate.jpg";
import sicon3 from "../assets/images/report.png";
import sicon4 from "../assets/images/expert.jpg";
import icon1 from "../assets/images/icon01.png";
import icon2 from "../assets/images/location.png";
import icon3 from "../assets/images/icon03.png";
import faq from "../assets/images/faq2.png";
import feature1 from "../assets/images/features1.png";
import videoIcon from "../assets/images/video-icon.png";
import user from "../assets/images/user.png";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRightCircle, BsMap, BsCameraVideo } from "react-icons/bs";
import { FaMicroscope } from "react-icons/fa";
import About from "../Components/About/About";
import ServicesList from "../Components/Services/ServicesList";
import FaqList from "../Components/Faq/FaqList";
import TestimonialComponent from "../Components/Testimonials/Testimonials";
import DoctorList from "../Components/Doctors/DoctorList";
import { FaUsers, FaUserMd } from "react-icons/fa";
import News from "../Components/Blog/News";
const Home = () => {
  const navigate = useNavigate();

  const handleRequestAppointment = () => {
    navigate("/doctors");
  };

  const handleCardClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <section className="hero__section pt-[40px] pb-[40px] 2xl:h-[800px] shadow-lg">
        <div className="max-w-full w-[1440px] px-8 mx-auto ">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[500px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[700] md:text-[50px] md:leading-[60px]">
                  We follow a holistic approach to health care.
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

      <div className="bg-gradient-to-b from-gray-100 to-white">
        <section className="">
          <div className="container py-[80px]">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center ">
                Providing the best medical services
              </h2>
              <p className="text__para text-center">
                World-class care for everyone. Our health system offers
                unmatched, expert healthcare.
              </p>
            </div>

            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] relative">
              {[
                {
                  icon: icon1,
                  title: "Find a Doctor",
                  description: `Health-E connects you to a wide array of top-rated doctors, offering both physical and virtual consultation options. 1Whether you need an in-person examination or a virtual consultation.`,
                  link: "/doctors",
                  clickIcon: (
                    <BsArrowRightCircle className="text-primaryColor w-8 h-8 group-hover:text-headingColor" />
                  ),
                },
                {
                  icon: icon2,
                  title: "Use Our ML Model",
                  description: `Detect early signs of brain tumors, Alzheimer's disease, and hemorrhages using advanced diagnostic analysis present on our website. Upload your MRI scans to receive accurate and timely results.`,
                  link: "/mri-diagnosis",
                  clickIcon: (
                    <FaMicroscope className="text-primaryColor w-8 h-8 group-hover:text-headingColor" />
                  ),
                  popup: true,
                },
                {
                  icon: icon3,
                  title: "Virtual Appointment",
                  description: `Health-E offers the convenience of virtual appointments, allowing you to consult with top doctors from anywhere, ensuring accessibility and comfort. You can chat or directly connect with the doctors.`,
                  link: "/doctors",
                  clickIcon: (
                    <BsCameraVideo className="text-primaryColor w-7 h-7 group-hover:text-headingColor" />
                  ),
                },
              ].map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  className="block py-[30px] px-5 bg-white shadow-md hover:shadow-xl rounded-lg transition-transform transform hover:-translate-y-2 border border-gray-200 hover:border-primaryColor group relative"
                >
                  {item.popup && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primaryColor to-headingColor text-white text-[13px] font-bold uppercase py-3 px-5 rounded-full shadow-lg animate-bounce">
                      Latest
                    </div>
                  )}
                  <div className="flex items-center justify-center">
                    <img src={item.icon} alt="" className="w-16 h-16" />
                  </div>
                  <div className="mt-[30px] text-center">
                    <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
                      {item.title}
                    </h2>
                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-center mt-8 group-hover:scale-110 transition-transform">
                    {item.clickIcon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-2 pb-10 ">
          {/* Hero Section */}
          <div className="container mx-auto px-5 py-10 lg:py-16 flex flex-col lg:flex-row items-center justify-center">
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-3xl lg:text-5xl font-bold text-primaryColor leading-tight mb-4">
                Advanced MRI Diagnosis for Neurological Health
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 mb-6">
                Detect early signs of{" "}
                <strong>
                  brain tumors, Alzheimer's disease, and hemorrhages{" "}
                </strong>
                using advanced diagnostic analysis present on our website.
                Upload your MRI scans to receive accurate and timely results.
              </p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
                onClick={() => handleCardClick("/mri-diagnosis")}
              >
                Know your Mental Health
              </button>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={sicon1}
                alt="MRI Diagnosis"
                className="rounded-lg shadow-lg w-[500px] lg:w-[700px] h-[280px]"
              />
            </div>
          </div>
          {/* Speciality Section */}
          <div className="container mx-auto px-5 py-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-headingColor mb-10">
              Our Speciality, In delivering
            </h2>
          </div>

          {/* Feature Cards */}
          <div className="container mx-auto px-5 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={sicon2}
                alt="Accurate Results"
                className="mx-auto mb-4 size-20"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Accurate Results
              </h3>
              <p className="text-gray-600">
                High-resolution MRI scans for precise detection and diagnosis.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={sicon3}
                alt="Timely Reports"
                className="mx-auto mb-4 size-20"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Timely Reports
              </h3>
              <p className="text-gray-600">
                Get your reports delivered quickly to ensure timely treatment.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={sicon4}
                alt="Expert Care"
                className="mx-auto mb-4 size-20"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Expert Care
              </h3>
              <p className="text-gray-600">
                Trusted neurologists and radiologists for your brain health.
              </p>
            </div>
          </div>
        </section>

        {/* services */}
        <section>
          <div className="container pt-10 my-9 mb-10 ">
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
        <section className="container shadow-md pb-[55px] pt-20">
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

        {/*blog*/}
        <section>
          <div className="container my-9">
            <div className="xl:w-[500px] mx-auto">
              <h2 className="heading text-center">
                Blog's From all over the World.
              </h2>
              <p className="text__para text-center">
                “He who has health, has hope; and he who has hope,
                <br /> has everything.” – Arabian Proverb.
              </p>
            </div>
            <News />
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

        <About />

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
      </div>
    </>
  );
};

export default Home;
