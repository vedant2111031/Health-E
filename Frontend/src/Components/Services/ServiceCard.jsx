import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ item: { name, desc, bgColor, textColor }, index }) => {
  const linkTo = name === "Neurology" ? "/mri-diagnosis" : "/doctors";

  return (
    <div className="relative py-8 px-3 lg:px-5 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow">
      {/* Highlighting Popup */}
      {name === "Neurology" && (
        <span className="absolute top-2 right-1 bg-primaryColor text-white text-s font-bold px-2 py-1 rounded-md shadow-lg">
          Latest
        </span>
      )}
      {/* Service Name */}
      <h2 className="text-[26px] leading-9 text-headingColor font-bold">{name}</h2>
      {/* Service Description */}
      <p className="text-[16px] leading-7 font-normal text-textColor mt-4">{desc}</p>
      <div className="flex items-center justify-between mt-8">
        {/* Link Button */}
        <Link
          to={linkTo}
          className="w-11 h-11 rounded-full border border-solid border-[#181A1E] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
          aria-label={`Learn more about ${name}`}
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
        {/* Index Badge */}
        <span
          className="w-11 h-11 flex items-center justify-center text-[18px] leading-[30px] font-semibold"
          style={{
            background: bgColor,
            color: textColor,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
