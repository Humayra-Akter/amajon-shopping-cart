import React from "react";
import Banner from "./banner";
import ItemCategory from "./ItemCategory";
import MostFavorite from "./MostFavorite";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <ItemCategory />
      <MostFavorite />
      <Reviews />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;
