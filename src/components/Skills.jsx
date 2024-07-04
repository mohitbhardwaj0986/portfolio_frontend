import React, { useEffect, useState } from "react";
import axios from "../axios/axios";
import { motion } from "framer-motion";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("/skills/getskills");
        setSkills(response.data);
      } catch (error) {
        console.error("Error fetching skills", error);
      }
    };
    fetchSkills();
  }, []);

  return (
    <div className="max-w-4xl mx-auto text-center min-h-[70vh] p-4">
      <h1 className="text-[#b3a5e5] text-3xl font-medium mb-6">My Skills</h1>

      <div className="relative p-5  rounded-lg shadow-lg">
        <div
       
          className="Skill-box flex flex-wrap gap-6 justify-center relative bg-[#7d72e71b] p-10 rounded-lg"
        >
          {skills.data? skills.data?.map((item) => (
            <div
              key={item._id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center"
            >
              <div className="relative skill-circle flex justify-center items-center w-20 h-20 mb-3">
                <motion.svg width="80" height="80" className="absolute">
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="#e6e6e6"
                    strokeWidth="5"
                    fill="none"
                  />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="#3498db"
                    strokeWidth="5"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 30}
                    strokeDashoffset={2 * Math.PI * 30}
                    initial={{ strokeDashoffset: 2 * Math.PI * 30 }}
                    animate={{
                      strokeDashoffset:
                        2 * Math.PI * 30 - (2 * Math.PI * 30 * 80) / 100,
                    }}
                    transition={{ duration: 2, delay: 7 }}
                  />
                </motion.svg>
                <div className="absolute w-full h-full flex justify-center items-center">
                  <img
                    className="w-10 h-10 object-cover object-center rounded-full"
                    src={item.skillImage}
                    alt={item.skillName}
                  />
                </div>
              </div>
              <h1 className=" text-xl">{item.skillName}</h1>
            </div>
          )) :<h1 className="min-h-[10vh] text-center  text-white text-4xl">loading</h1>}
        </div>
      </div>
    </div>
  );
}

export default Skills;
