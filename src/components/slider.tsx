'use client';

import React, { useState, useEffect } from "react";

const slides = [
  "/images/slide1.jpg", 
  "/images/slide2.jpg", 
  "/images/slide3.jpg", 
  "/images/slide4.jpg",  
  "/images/slide5.jpg",  
  "/images/slide6.jpg",  
  "/images/slide7.jpg", 
  "/images/slide8.jpg",  
  "/images/slide9.jpg",  
  "/images/slide10.jpg", 
];

const SmoothSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 5; 
  const totalSlides = slides.length;

 
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  const nextSlide = () => {    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides); 
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-[1250px] h-[400px] overflow-hidden mx-auto">
      <div
        className=" gap-2 flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex % totalSlides) * 258}px)`,
        }}
      >
        {slides.concat(slides).map((slide, index) => (
          <div
            key={index}
            className="w-[250px] h-[400px] flex-shrink-0"
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* <button
        onClick={prevSlide}
        className=" opacity-65	 absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-gray-800 py-2 px-3 rounded-xl shadow-lg hover:bg-gray-700 transition duration-200"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className=" opacity-65	absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-gray-800 py-2 px-3 rounded-xl shadow-lg hover:bg-gray-700 transition duration-200"
      >
        Next
      </button> */}
    </div>
  );
};

export default SmoothSlider;
