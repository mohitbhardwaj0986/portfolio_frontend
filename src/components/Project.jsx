import React, { useEffect, useState } from "react";
import axios from "../axios/axios";
import { Link } from "react-router-dom";

function Project() {
  const [project, setProject] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("/project/getproject");
      setProject(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="max-w-6xl flex-wrap mx-auto min-h-[60vh] flex justify-center gap-10 md:gap-20 p-4">
        {project.data? project.data?.map((item) => (
          <div
            key={item._id}
            className="w-full project-card sm:w-[45vw] md:w-[30vw] lg:w-[22vw]   p-5 rounded-xl mb-10"
          >
            <div className=" w-full h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover object-center"
                src={item.projectImage}
                alt=""
              />
            </div>
            <div className="w-full mt-4">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                {item.title}
              </h1>
              <h1 className="text-lg md:text-xl mt-2">{item.description}</h1>
              <div className="flex justify-between items-center text-base md:text-lg mt-4">
                <Link
                  to={item.link}
                  className="underline text-blue-600"
                >
                  Project Link
                </Link>
                <Link
                  to={item.sorceLink}
                  className="text-[#03B5F4] font-semibold"
                >
                  Source Code
                </Link>
              </div>
            </div>
          </div>
        )) :<h1 className="min-h-[60vh] text-center mt-44 text-white text-4xl">loading</h1>}
         
      </div>
    </>
  );
}

export default Project;
