import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import Team from "./Team/Team";
import Blog from "./Blog/Blog";
import Categories from "./Categories/Categories";
import "../../index.scss";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Team />
      <Blog />
      <Categories />
    </>
  );
};

export default Home;
