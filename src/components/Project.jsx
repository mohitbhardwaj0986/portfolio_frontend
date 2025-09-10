import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import talkverse from "../assets/talkverse.png";
import medicare from "../assets/medicare.png";
import codecrack from "../assets/codecrack.png";
import chemberalian from "../assets/Chemberalian.png";


function Project() {
  const projectData = [
    {
      _id: 1,
      projectImage: codecrack,
      title: "CodeCrack",
      description:
        "CodeCrack is an AI-powered interview preparation platform that helps developers practice coding challenges, take mock interviews, and get instant feedback on problem-solving, communication, and resumes.",
      link: "https://codescrack.netlify.app/",
      sourceLink: "https://github.com/mohitbhardwaj0986/code_crack_frontend",
    },
    {
      _id: 2,
      projectImage: talkverse,
      title: "Talkverse",
      description:
        "TalkVerse is an AI + private chat platform that combines real-time messaging with intelligent AI assistance. Users can chat with friends via invite links while also engaging with an AI chatbot for instant responses and brainstorming.",
      link: "https://talkverse.netlify.app/",
      sourceLink: "https://github.com/mohitbhardwaj0986/talkVerse_frontend",
    },
    {
      _id: 3,
      projectImage: medicare,
      title: "Hospital Management System (HMS)",
      description:
        "A full-stack Hospital Management System designed to streamline healthcare operations, allowing doctors to manage records, prescriptions, and appointments while patients can access their history and book consultations.",
      link: "https://medicarehmsystem.netlify.app/",
      sourceLink: "https://github.com/mohitbhardwaj0986/HMSystem_Frontend",
    },
    {
      _id: 4,
      projectImage: chemberalian,
      title: "Chemberalian Coffee",
      description:
        "Chemberalian is a modern e-commerce platform designed for seamless shopping experiences. It features an elegant product showcase, a responsive UI, and a secure cart system powered by React and Redux. With smooth animations, intuitive navigation, and optimized performance, Chemberalian delivers a professional and user-friendly online shopping solution.A full-stack Hospital Management System designed to streamline healthcare operations, allowing doctors to manage records, prescriptions, and appointments while patients can access their history and book consultations.",
      link: "https://chamberlencoffee.netlify.app/",
      sourceLink: "https://github.com/mohitbhardwaj0986/sheryins_frontEnd_hackethon",
    },
  ];

  // Framer Motion Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="max-w-6xl flex-wrap mx-auto min-h-[60vh] flex justify-center gap-8 md:gap-12 p-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {projectData.map((item) => (
        <motion.div
          key={item._id}
          variants={card}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 20px rgba(3,181,244,0.4)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="w-full sm:w-[42vw] md:w-[28vw] lg:w-[20vw] p-4 rounded-xl bg-white/5 backdrop-blur-lg shadow-md cursor-pointer"
        >
          {/* Image Section */}
          <div className="w-full h-32 sm:h-40 md:h-44 lg:h-48 overflow-hidden rounded-lg">
            <motion.img
              src={item.projectImage}
              alt={item.title}
              className="w-full h-full object-cover object-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Text Section */}
          <div className="w-full mt-3">
            <h1 className="text-lg md:text-xl font-semibold">{item.title}</h1>
            <p className="text-sm md:text-base text-gray-300 mt-1 line-clamp-2">
              {item.description}
            </p>

            {/* Links */}
            <div className="flex justify-between items-center text-sm md:text-base mt-3">
              <Link
                to={item.link}
                className="underline text-blue-400 hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </Link>
              <Link
                to={item.sourceLink}
                className="text-[#03B5F4] font-semibold hover:text-[#58d4ff] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Project;
