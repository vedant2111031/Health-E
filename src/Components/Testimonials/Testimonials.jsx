import React from "react";
import Slider from "react-slick";
import { HiStar } from "react-icons/hi";

const testimonials = [
  {
    name: "Joshua Jones",
    title: "Business Manager",
    image: "/img/author1.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    name: "Paula Mora",
    title: "Business Manager",
    image: "/img/author2.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    name: "Rhonda Rhodes",
    title: "Business Manager",
    image: "/img/author3.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
];

const TestimonialComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-12 shadow-md">
      <h2 className="text-center text-2xl font-semibold text-gray-800">
        Testimonials
      </h2>
      <div className="mt-8 max-w-screen-xl mx-auto px-4 overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <blockquote className="italic text-gray-600 mb-4">
                  <span
                    className="absolute top-0 left-0 text-5xl text-blue-600 opacity-20 leading-none"
                    style={{ fontFamily: "serif" }}
                  >
                    &ldquo;
                    <div className="flex items-centergap-[2px]">
                      <HiStar className="text-yellowColor" />
                      <HiStar className="text-yellowColor" />
                      <HiStar className="text-yellowColor" />
                      <HiStar className="text-yellowColor" />
                      <HiStar className="text-yellowColor" />
                    </div>
                  </span>
                  “{testimonial.text}”
                  <span
                    className="absolute bottom-0 right-0 text-5xl text-blue-600 opacity-20 leading-none"
                    style={{ fontFamily: "serif" }}
                  >
                    &rdquo;
                  </span>
                </blockquote>
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={`${testimonial.name}'s picture`}
                  />
                  <div className="ml-4">
                    <p className="text-blue-600 font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialComponent;
