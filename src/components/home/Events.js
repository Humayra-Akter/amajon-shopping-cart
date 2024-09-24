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
    <div className="relative w-full max-w-4xl mx-auto bg-white shadow-lg overflow-hidden">
      <div className="relative h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {index === current && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-10 text-white">
                <h1 className="text-4xl font-bold uppercase">{slide.name}</h1>
                <p className="mt-4">{slide.description}</p>
                <button className="mt-4 px-6 py-2 bg-blue-500 rounded hover:bg-blue-700 transition-all">
                  See More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
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
