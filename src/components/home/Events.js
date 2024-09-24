import React, { useState } from "react";

const Events = () => {
  const slides = [
    {
      name: "Switzerland",
      image: "https://i.ibb.co/qCkd9jS/img1.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      name: "Finland",
      image: "https://i.ibb.co/jrRb11q/img2.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      name: "Iceland",
      image: "https://i.ibb.co/NSwVv8D/img3.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      name: "Australia",
      image: "https://i.ibb.co/Bq4Q0M8/img4.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      name: "Netherlands",
      image: "https://i.ibb.co/jTQfmTq/img5.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      name: "Ireland",
      image: "https://i.ibb.co/RNkk6L0/img6.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full relative h-96 p-6 ${
                index === current ? "scale-105" : "scale-90"
              } transition-transform duration-300`}
            >
              <div
                className="w-full h-full bg-cover bg-center rounded-lg shadow-lg relative"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-10 text-white">
                  <h1 className="text-3xl font-bold uppercase">{slide.name}</h1>
                  <p className="mt-4">{slide.description}</p>
                  <button className="mt-4 px-6 py-2 bg-blue-500 rounded hover:bg-blue-700 transition-all">
                    See More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Events;
