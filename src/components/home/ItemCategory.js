import React from "react";
import img1 from "../../images/category/electronics.png";
import img2 from "../../images/category/fashion.png";
import img6 from "../../images/category/grocerries.png";
import img4 from "../../images/category/sports.png";
import img5 from "../../images/category/toys.png";
import img3 from "../../images/category/homeKitchen.png";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: img1,
  },
  {
    id: 2,
    name: "Fashion",
    image: img2,
  },
  {
    id: 3,
    name: "Home & Kitchen",
    image: img3,
  },
  {
    id: 4,
    name: "Sports",
    image: img4,
  },
  {
    id: 5,
    name: "Toys",
    image: img5,
  },
  {
    id: 6,
    name: "Groceries",
    image: img6,
  },
];

const ItemCategory = () => {
  return (
    <div className="my-10 px-4">
      <h2 className="text-3xl text-center text-[#daa520] hover:text-[#1c2b35] font-bold mb-4">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ItemCategory;
