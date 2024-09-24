import React from "react";
import ItemCategory from "./ItemCategory";
import MostFavorite from "./MostFavorite";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Footer from "./Footer";
import BannerSection from "./BannerSection";
import Services from "./Services";
import Header from "../header/Header";
import Events from "./Events";

const Home = () => {
  return (
    <div>
      <Header />
      <BannerSection />
      <ItemCategory />
      <Events />
      <Services />
      <MostFavorite />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
