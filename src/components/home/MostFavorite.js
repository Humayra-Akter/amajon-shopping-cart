import React, { useState, useEffect } from "react";
import FavoriteCard from "./FavoriteCard";

const favoriteItems = [
  {
    id: 1,
    name: "Wireless Earbuds",
    image: "https://via.placeholder.com/150?text=Earbuds",
    price: "$59.99",
  },
  {
    id: 2,
    name: "Smart Watch",
    image: "https://via.placeholder.com/150?text=Smart+Watch",
    price: "$129.99",
  },
  {
    id: 3,
    name: "4K TV",
    image: "https://via.placeholder.com/150?text=4K+TV",
    price: "$499.99",
  },
  {
    id: 4,
    name: "Gaming Laptop",
    image: "https://via.placeholder.com/150?text=Laptop",
    price: "$999.99",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    image: "https://via.placeholder.com/150?text=Speaker",
    price: "$79.99",
  },

  {
    id: 6,
    name: "Wireless Earbuds",
    image: "https://via.placeholder.com/150?text=Earbuds",
    price: "$59.99",
  },
];

const MostFavorite = () => {
  return (
    <div className="my-12 px-6">
      <h2 className="text-3xl text-center text-[#daa520] font-bold mb-7">
        Our Most Favorite Items
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {favoriteItems.map((item, index) => (
          <FavoriteCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};



export default MostFavorite;
