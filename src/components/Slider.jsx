import React from "react";
import { motion } from "framer-motion";

import cloudinarylogo from "../assets/cloudinary logo.png";
import gitlogo from "../assets/git logo.png";
import githublogo from "../assets/github logo.png";
import iduqUTJfrlogos from "../assets/iduq-UTJfr_logos.png";
import jslogo from "../assets/js logo.png";

function Slider() {
  const logos = [
    { src: cloudinarylogo, alt: "Cloudinary Logo" },
    { src: gitlogo, alt: "Git Logo" },
    { src: githublogo, alt: "GitHub Logo" },
    { src: iduqUTJfrlogos, alt: "Iduq UTJfr Logos" },
    { src: jslogo, alt: "JS Logo" },
  ];

  // duplicate for smooth infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="overflow-hidden h-[40vh] flex items-center relative bg-black">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="w-32 h-auto object-contain"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.2,
              rotate: 5,
              boxShadow: "0px 0px 25px rgba(255,255,255,0.6)",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Slider;
