import React from 'react';


const ServiceCard = ({ item }) => {
  return (
    <div className="flex flex-col items-center">
        <div
         className="rounded-full shadow-md p-5 mt-[100px] text-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${item.img})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            width: '169px', 
            height: '169px', 
          }}
        />
      
      <h3
        className="text-lg font-semibold mt-3"
        
      >
        {item.name}
      </h3>
    </div>
  );
};

export default ServiceCard;
