import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skillsData = [
    {
      _id: 1,
      skillName: "React",
      skillImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      _id: 2,
      skillName: "JavaScript",
      skillImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      _id: 3,
      skillName: "Node.js",
      skillImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      _id: 4,
      skillName: "Express.js",
      skillImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      _id: 5,
      skillName: "MongoDB",
      skillImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      _id: 6,
      skillName: "PostgreSQL",
      skillImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      _id: 7,
      skillName: "HTML",
      skillImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      _id: 8,
      skillName: "CSS",
      skillImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      _id: 9,
      skillName: "Tailwind CSS",
      skillImage:
      "  https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
,
    },
    {
      _id: 10,
      skillName: "Sass",
      skillImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
      _id: 11,
      skillName: "Git",
      skillImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      _id: 12,
      skillName: "Redux",
      skillImage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      _id: 13,
      skillName: "Framer Motion",
      skillImage: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    },
    {
      _id: 14,
      skillName: "GSAP",
      skillImage: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
    },
    {
      _id: 15,
      skillName: "Socket.IO",
      skillImage:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="max-w-6xl mx-auto text-center min-h-[60vh] p-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[#b3a5e5] text-2xl md:text-3xl font-semibold mb-8"
      >
        My Skills
      </motion.h1>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
      >
        {skillsData.map((skill) => (
          <motion.div
            key={skill._id}
            variants={item}
            whileHover={{ scale: 1.07, y: -4 }}
            className="flex flex-col items-center justify-center bg-[#1f1f2e]/90 rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-[0_0_15px_#b3a5e5]"
          >
            <img
              src={skill.skillImage}
              alt={skill.skillName}
              className="w-10 h-10 mb-3"
            />
            <h1 className="text-sm md:text-base font-medium text-white">
              {skill.skillName}
            </h1>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
