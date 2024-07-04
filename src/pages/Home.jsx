import React from "react";
import Loading from "./Loading";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Footer from "../layer/Footer";
import Slider from "../components/Slider";
import MouseFollower from "../components/MouseFollower";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function Home() {
  const navigate = useNavigate();
    const token = useSelector((state)=>state.user.token)
  return (
    <div>
      <Loading />
      <button
type='button'
onClick={()=>token?navigate("/dashboard"):navigate("/login")}
    className="submit absolute right-6 top-10 px-3   text-white py-2 rounded  focus:outline-none focus:ring-2  focus:ring-opacity-50"
  >
    Admin login
  </button>
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
