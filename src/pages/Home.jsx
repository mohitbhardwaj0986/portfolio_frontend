import React from "react";
import Loading from "./Loading";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Footer from "../layer/Footer";
import Slider from "../components/Slider";
import MouseFollower from "../components/MouseFollower";

function Home() {
  return (
    <div>
      {/* <Loading /> */}
  
      <HeroSection />
      <Skills />
      <Project />
      <Footer />
      <Slider />
      <MouseFollower />
    </div>
  );
}

export default Home;
