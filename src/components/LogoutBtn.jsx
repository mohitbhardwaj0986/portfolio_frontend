import React from 'react'
import axios from "../axios/axios"
import {useNavigate} from "react-router-dom"
import { clearToken } from '../store/userSlice'
import { useDispatch } from 'react-redux'

function LogoutBtn() {
  const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandle = async () => {
       await axios.post("/user/logout")
       dispatch(clearToken()); 
       localStorage.removeItem("token")  
       navigate("/")
    }

  return (
    <button
type='button'
onClick={()=>logoutHandle()}
    className="logout px-3  font-medium absolute right-6 top-10   text-white py-2 rounded  focus:outline-none focus:ring-2  focus:ring-opacity-50"
  >
    logout
  </button>
  )
}

export default LogoutBtn