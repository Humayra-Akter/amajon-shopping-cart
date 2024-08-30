import React, { useEffect, useState } from "react";

const FavoriteCard = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div
      className={`relative p-4 bg-white rounded-xl shadow-lg transform transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } hover:shadow-2xl hover:-translate-y-1`}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
        <p>Buy Now</p>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="text-gray-600">{item.price}</p>
      </div>
    </div>
  );
};

export default FavoriteCard;
