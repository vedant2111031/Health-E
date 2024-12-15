import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../../assets/data/services';

const ServicesList = () => {
  const infiniteServices = [...services, ...services]; // Duplicate services for endless scroll

  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%); /* Scroll until half of the content is off screen */
            }
          }

          .infinite-scroll {
            display: flex;
            overflow: hidden;
            position: relative;
          }

          .infinite-scroll .scroll-track {
            display: flex;
            animation: scroll 30s linear infinite; /* Adjust timing for smoother speed */
            width: max-content;
          }

          .scrollbar-hide::-webkit-scrollbar {
            display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
          }

          .scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>

      <div className="infinite-scroll scrollbar-hide">
        <div className="scroll-track">
          {infiniteServices.map((item, index) => (
            <div key={index} className="px-4">
              <ServiceCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesList;
