import React from "react";
import cloudinarylogo from "../assets/cloudinary logo.png";
import gitlogo from "../assets/git logo.png";
import githublogo from "../assets/github logo.png";
import iduqUTJfrlogos from "../assets/iduq-UTJfr_logos.png";
import jslogo from "../assets/js logo.png";
import { motion } from "framer-motion";

function Slider() {
  const logos = [
    { src: cloudinarylogo, alt: "Cloudinary Logo" },
    { src: gitlogo, alt: "Git Logo" },
    { src: githublogo, alt: "GitHub Logo" },
    { src: iduqUTJfrlogos, alt: "Iduq UTJfr Logos" },
    { src: jslogo, alt: "JS Logo" },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]; 

  return (
    <div className="overflow-x-hidden h-[40vh] whitespace-nowrap">
      <motion.div
        className="flex gap-8 justify-center items-center"
        animate={{ x: "-100%" }}
        transition={{
          duration: 20, // Adjust duration as needed
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <img key={index} className="w-44 inline-block ml-5 h-auto" src={logo.src} alt={logo.alt} />
        ))}
      </motion.div>
    </div>
  );
}

export default Slider;
