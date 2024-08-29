import React, { useState } from "react";
import banner1 from '../../images/banner/1.png'
import banner2 from '../../images/banner/2.png'
import banner3 from '../../images/banner/3.png'
import banner4 from '../../images/banner/4.png'
import banner5 from '../../images/banner/5.png'
import banner6 from '../../images/banner/6.png'
import banner7 from '../../images/banner/7.png'

const bannerData = [
  {
    id: 1,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
    title: "Amazing Deals on Electronics",
  },
  {
    id: 2,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64f1ba254925439d88eaad920127d77e_9366/Essentials4Gameday_Pants_Black_HE1800_21_model.jpg",
    title: "New Arrivals in Fashion",
  },
  {
    id: 3,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c6a321b7bb7243d28fe9ac71011393c7_9366/Own_the_Run_Long_Sleeve_Tee_Black_GJ9977_21_model.jpg",
    title: "Top Picks in Home Appliances",
  },
];

const BannerSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % bannerData.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + bannerData.length) % bannerData.length);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {bannerData.map((item) => (
          <div key={item.id} className="min-w-full">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover"
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
