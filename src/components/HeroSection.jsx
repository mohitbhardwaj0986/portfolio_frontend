import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HeroSection() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const item = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="flex justify-center items-center h-screen w-full relative overflow-hidden bg-[#030115]">
      <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      {/* Floating background blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25, scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-[650px] h-[650px] bg-[#b3a5e5] rounded-full blur-3xl -top-20 -left-20 -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2, scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-[500px] h-[500px] bg-[#6e57e0] rounded-full blur-3xl bottom-10 right-10 -z-10"
      />

      {/* Content */}
      <div className="text-white max-w-4xl mx-auto text-center px-4 z-10">
        {/* Top line */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm md:text-md tracking-widest uppercase"
        >
          Building Full-Stack Web Magic with MERN
        </motion.h1>

        {/* Main heading */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-semibold mt-4"
        >
          <motion.div variants={item} className="overflow-hidden py-1">
            <motion.h1>Transforming Ideas</motion.h1>
          </motion.div>
          <motion.div variants={item} className="overflow-hidden py-1">
            <motion.h1>
              into Scalable{" "}
              <span className="bg-gradient-to-r from-[#b3a5e5] to-[#6e57e0] bg-clip-text text-transparent">
                Applications
              </span>
            </motion.h1>
          </motion.div>
          <motion.div variants={item} className="overflow-hidden py-1">
            <motion.h1 className="bg-gradient-to-r from-[#b3a5e5] to-[#6e57e0] bg-clip-text text-transparent">
              with MERN Stack
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* Sub intro */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl mt-6"
        >
          Hi, I'm{" "}
          <motion.span
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="font-bold bg-gradient-to-r from-[#b3a5e5] to-[#6e57e0] bg-clip-text text-transparent"
          >
            Mohit Bhardwaj
          </motion.span>
          , a MERN Stack Developer from India.
        </motion.h1>

        {/* Resume button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8"
        >
          <Link
            to="https://drive.google.com/file/d/1BwECoUYopc7ai_idjfu7wjN6pWFDXl8R/view?usp=sharing"
            target="_blank"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl font-medium text-lg bg-gradient-to-r from-[#b3a5e5] to-[#6e57e0] shadow-lg hover:shadow-[#6e57e0]/50 transition-all"
            >
              View Resume
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 4.2, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#b3a5e5] rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-[#b3a5e5] rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
