import React from "react";
import notfound from "../assets/notfound.mp4";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#000000] h-screen">
        <video
          className="mx-auto w-ful h-full"
          muted
          loop
          autoPlay
          src={notfound}
          alt=""
        />
        <div className="  text-xl sm:text-3xl relative text-center z-10 -mt-56"> 
        <h1 className="text-center">page not found</h1>
            <h1 className="text-center">404</h1>
            <button
type='button'
onClick={()=>navigate("/")}
    className="submit  px-4 sm:text-xl absolute top-0 left-[40%] sm:left-[47%]  mt-20 text-sm  text-white py-1 rounded  focus:outline-none focus:ring-2  focus:ring-opacity-50"
  >
   Back
  </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
