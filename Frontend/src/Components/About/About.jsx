import React from 'react'
import about from "../../assets/images/about.png";
import about2 from "../../assets/images/about2.png";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center p-6 bg-white mb-9">
    <div className="relative lg:w-1/2 w-full flex flex-col items-center lg:items-start ">
      <img src={about} alt="Presentation" className="rounded-lg mb-6 lg:mb-0 lg:mr-6" />
      <div className="bg-gray-600 rounded-md absolute z-20 bottom-4 w-[200px] md:w-[200px] right-[-30%] md:right-[-7%] lg:right-[2%] shadow-2xl">
        <img src={about2} alt="Dr. Mastur D" className="w-18 h-16 rounded-full mr-4" />
        <div className='px-2'>
          <h2 className="text-xl font-bold">Dr. Mastur D</h2>
          <p className="text-gray-600">CEO DoctorX</p>
          <p className="text-gray-400 mt-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"</p>
        </div>
      </div>
    </div>
    {/* Right Side: About Us Text */}
    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
      <h2 className="heading">ABOUT US</h2>
      <p className="text__para mt-[30px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text__para">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="flex justify-center lg:justify-start space-x-4">
        <Link to='/'><button className="btn">Learn more</button></Link>
      </div>
    </div>
  </div>
);
}

export default About
