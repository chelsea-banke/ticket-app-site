import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe - Organisation A",
    rating: 4,
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Jane Smith - Organisation B",
    rating: 5,
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Emily Johnson - Organisation C",
    rating: 3,
  },
  {
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Michael Brown - Organisation D",
    rating: 4,
  },
];

export const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000); // auto switch every 4s
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => setCurrent(index);

  return (
    <div className="md:p-6 py-10 flex justify-center items-center min-h-[300px]">
      <div className="relative bg-gray-100 border p-6 w-full max-w-4xl flex items-center">
        {/* Quote Section */}
        <div className="text-2xl mr-4 text-black">
          <FontAwesomeIcon icon="fa-solid fa-quote-left" size="2x" />
        </div>

        <div className="flex-1">
          <p className="text-sm text-gray-800">
            {testimonials[current].text}{testimonials[current].text}{testimonials[current].text}
          </p>
          <div className="mt-4 text-center font-semibold text-black">
            {testimonials[current].author}
          </div>
          <div className="flex justify-center mt-2 text-yellow-500">
            {[...Array(5)].map((_, i) =>
              i < testimonials[current].rating ? (
                <FontAwesomeIcon icon="fa-solid fa-star" size="1x" key={i} />
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-star" size="1x" className="text-gray-400" key={i} />
              )
            )}
          </div>
        </div>

        <div className="text-2xl ml-4 text-black">
          <FontAwesomeIcon icon="fa-solid fa-quote-right" size="2x" />
        </div>

        {/* Dots Navigation */}
        <div className="absolute flex flex-row gap-2 bottom-[-25px] left-1/2 -translate-x-1/2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-3 h-3 rounded-full border border-black ${
                i === current ? "bg-red-600" : "bg-white"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};