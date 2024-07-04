import React, { useState } from "react";
import axios from "../axios/axios";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import loadingGif from "../assets/loading.gif"; // Corrected the typo
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [error, setError] = React.useState("");
  const token = useSelector((state) => state.user.token);

  const loginHandle = async (data) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("/user/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.data.success) {
          dispatch(setToken(response.data.token));
          localStorage.setItem("token",response.data.token)
        console.log(token);
        reset();
        navigate("/dashboard")
      } else {
        setError(response.data.error);
      }
    } catch (err) {
      setError("invalid username password Please try again.");
  
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginpage h-[95vh] relative flex items-center justify-center text-black">
      <div className="loginblur relative w-full h-full flex flex-col lg:flex-row items-center justify-center">
        <div className="hidden lg:block lg:absolute lg:top-36 lg:left-20"></div>
        <div className="loginform w-[90vw] lg:w-[40vw] h-auto lg:h-[65vh] bg-white rounded-2xl p-10 shadow-lg">
          <h1 className="text-center font-medium text-xl mb-5">
         Welcome Back Admin
          </h1>
          {error && (
            <h2 className="text-center text-red-600">{error} Try Again</h2>
          )}

          <form onSubmit={handleSubmit(loginHandle)}>
            <Input
              label="Username"
              placeholder="Enter your username"
              type="text"
              {...register("username", {
                required: "Username is required", // Corrected error message
              })}
            />
            {errors.username && ( // Corrected error display
              <p className="text-red-500">{errors.username.message}</p>
            )}
            <Input
              label="Password"
              placeholder="Password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                maxLength: {
                  value: 15,
                  message: "Password must be at most 15 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            {loading ? (
              <img className="w-12 mx-auto" src={loadingGif} alt="loading" />
            ) : (
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 px-4 py-2 text-white font-semibold rounded-md mt-5 w-full"
              >
                Login Account
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
