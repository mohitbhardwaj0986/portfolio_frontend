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
        <div className="absolute -top-[-70%] -right-[-45%] text-3xl text-center "> 
        <h1>page not found</h1>
            <h1>404</h1>
            <button
type='button'
onClick={()=>navigate("/")}
    className="submit absolute right-6 top-10 px-3 text-xl mt-10 mr-11  text-white py-2 rounded  focus:outline-none focus:ring-2  focus:ring-opacity-50"
  >
   Back
  </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
