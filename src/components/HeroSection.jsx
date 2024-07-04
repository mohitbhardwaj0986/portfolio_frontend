import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="text-white max-w-4xl mx-auto text-center px-4">
          <div>
            <h1 className="text-sm md:text-md">DYNAMIC WEB MAGIC WITH REACT.JS</h1>
          </div>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-medium">
            <div className="overflow-hidden py-1">  
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.5 }}
              >
                Transforming Concepts
              </motion.h1>
            </div>
            <div className="overflow-hidden py-1">  
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.7 }}
              >
                into Seamless <span className="text-[#b3a5e5]">User</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden py-1">  
              <motion.h1
                className="text-[#b3a5e5]"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.9 }}
              >
                Experiences
              </motion.h1>
            </div>
          </div>
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl mt-5">
              Hi, I'm Mohit Bhardwaj, a React.js developer based in India.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
