import React from 'react';
import about from "../../assets/images/about.png";
import about2 from "../../assets/images/about2.png";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center p-6 bg-white mb-9 shadow-md">
      
      <div className="relative lg:w-1/2 w-full flex flex-col items-center lg:items-start">
        <img src={about} alt="Presentation" className="rounded-lg mb-6 lg:mb-0 lg:mr-6 w-full max-w-[400px]" />
        <div className="bg-gray-600 rounded-md absolute z-20 bottom-0 lg:bottom-4 right-0 lg:right-4 transform lg:translate-x-0 shadow-2xl p-4 w-[200px]">
          <img src={about2} alt="Dr. Mastur D" className="w-18 h-16 rounded-full mx-auto" />
          <div className='text-center text-white'>
            <h2 className="text-xl font-bold">Dr. Mastur D</h2>
            <p className="text-gray-300">CEO, DoctorX</p>
            <p className="text-gray-400 mt-2">"Health-E is Revolutionizing Your Healthcare Experience"</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 xl:w-[670px] mt-6 lg:mt-0 order-1 lg:order-2">
        <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">ABOUT US</h2>
        <p className="text__para mt-4 text-base lg:text-lg">
          Health-E is your go-to platform for seamless healthcare solutions, connecting you with top-tier medical professionals for both in-person and virtual consultations. Our innovative platform offers a user-friendly interface that allows patients to effortlessly book appointments, whether you prefer a face-to-face visit or a convenient online session.
        </p>
        <p className="text__para mt-4 text-base lg:text-lg">
          With Health-E, you can chat directly with healthcare providers, ensuring that your questions and concerns are addressed in real time. Our advanced search features help you find doctors based on your specific preferences, including specialty, experience, and location.
        </p>
        <p className="text__para mt-4 text-base lg:text-lg">
          In addition to connecting you with healthcare professionals, Health-E simplifies your prescription needs by helping you find and obtain medicines with ease. Experience a new level of convenience and care with Health-E, where we blend technology and compassionate service to support your health journey every step of the way.
        </p>
        <div className="flex justify-center lg:justify-start space-x-4 mt-6">
          <Link to='/'><button className="btn">Learn more</button></Link>
        </div>
      </div>
    </div>
  );
}

export default About;
