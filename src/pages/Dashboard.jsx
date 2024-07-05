import React, { useEffect } from "react";
import {useNavigate}  from 'react-router-dom'
import LogoutBtn from "../components/LogoutBtn";
import { useSelector } from "react-redux";
import NotFound from "./NotFound";

function Dashboard() {
  const token = useSelector((state)=>state.user.token)

    const navigate = useNavigate()
    console.log(token);

   
  return (
    <>
   {
    token?( <div className="max-w-2xl mx-auto">
      <LogoutBtn/>
        

      <h1 className="text-center mt-20 mb-10 text-3xl font-semibold">Hello admin!</h1>
      <div className=" flex gap-5 px-5 mt-5">
        <button onClick={()=>navigate("/")} className="submit px-3  text-white py-2 rounded  focus:outline-none focus:ring-2  ">
        Home
        </button>
        <button onClick={()=>navigate('/postskill')} className="submit px-3  text-white py-2 rounded  focus:outline-none focus:ring-2  ">
          post skill
        </button>
        <button onClick={()=>navigate("/postproject")} className="submit px-3  text-white py-2 rounded  focus:outline-none focus:ring-2  ">
          post project
        </button>
      </div>
    </div>):(<NotFound/>)
   }
   </>
  );
}

export default Dashboard;
