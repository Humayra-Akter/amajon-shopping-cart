import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div
      className="transform transition-transform duration-700 
        scale-100 opacity-100 hover:scale-105 border border-[#daa520]
      bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-medium">{category.name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
