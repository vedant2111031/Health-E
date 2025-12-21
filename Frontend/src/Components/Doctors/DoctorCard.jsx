import React from "react";
import starIcon from "../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialization,
    experiences,
  } = doctor;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} className="max-w-[250px] max-h-[200px]" alt="" />
      </div>
      <h2 className="text-[18px] leading-[30px] lg:text-[24px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
        {name}
      </h2>

      <div className="mt-2 lg:mt-4 flex item-center justify-between">
        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:px-6 text-[12px] leading-4 lg:text-[14px] lg:leading-7 font-semibold rounded">
          {specialization}
        </span>
        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
            <img src={starIcon} alt="" />
            {avgRating}
          </span>
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          {/* <h3 className="text-[16px] leading-7 lg:text-[15px] lg:leading-[30px] font-semibold text-headingColor">
            +{totalPatients} patients
          </h3> */}
          <p className="text-[14px] leading-6 font[440] text-textColor">
            At {experiences && experiences[0]?.hospital} 
          </p>
        </div>
       <Link
  to="#"
  onClick={(e) => {
    e.preventDefault(); // stop instant navigation

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "web.doctorCard.click",
      component_name: "doctorcard",
      interaction_type: "link click",
      section: "doctor list",
      doctor_name: name ? name.toLowerCase() : "",
      specialization: specialization ? specialization.toLowerCase() : "",
      hospital:
        experiences && experiences[0]?.hospital
          ? experiences[0].hospital.toLowerCase()
          : "",
      destination_url: `/doctors/${doctor._id}`
    });

    // allow GTM to process, then navigate
    setTimeout(() => {
      window.location.href = `/doctors/${doctor._id}`;
    }, 150);
  }}
  className="w-10 h-10 min-w-10 min-h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-primaryColor hover:border-primaryColor transition duration-300"
>
  <BsArrowRight className="text-gray-800 group-hover:text-white w-[18px] h-[18px]" />
</Link>

      </div>
    </div>
  );
};

export default DoctorCard;
