import React from "react";
import ItemCategory from "./ItemCategory";
import MostFavorite from "./MostFavorite";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Footer from "./Footer";
import BannerSection from "./BannerSection";
import Services from "./Services";
import Header from "../header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <BannerSection />
      <ItemCategory />
      <Services />
      <MostFavorite />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
