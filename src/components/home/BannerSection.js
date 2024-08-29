import React, { useState, useEffect } from "react";
import banner1 from "../../images/banner/1.png";
import banner2 from "../../images/banner/2.png";
import banner3 from "../../images/banner/3.png";
import banner4 from "../../images/banner/4.png";
import banner5 from "../../images/banner/5.png";
import banner6 from "../../images/banner/6.png";
import banner7 from "../../images/banner/7.png";

const bannerData = [
  { id: 1, image: banner1, title: "Amazing Deals on Electronics" },
  { id: 2, image: banner2, title: "New Arrivals in Fashion" },
  { id: 3, image: banner3, title: "Top Picks in Home Appliances" },
  { id: 4, image: banner4, title: "Latest in Sports Gear" },
  { id: 5, image: banner5, title: "Trending in Home Decor" },
  { id: 6, image: banner6, title: "Best Deals on Groceries" },
  { id: 7, image: banner7, title: "Exclusive Offers on Toys" },
];

const BannerSection = () => {
  const [current, setCurrent] = useState(0);
  const length = bannerData.length;

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative overflow-hidden object-cover h-[500px]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {bannerData.map((item) => (
          <div key={item.id} className="min-w-full h-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl">
              {item.title}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white bg-gray-800 bg-opacity-50 px-2 py-1 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white bg-gray-800 bg-opacity-50 px-2 py-1 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default BannerSection;
