import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "../axios/axios";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import loadingGif from "../assets/loading.gif";
import { useNavigate } from "react-router-dom";

function ProjectPost() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const postProject = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      for (const key in data) {
        if (key === "projectImage" && data[key][0]) {
          formData.append(key, data[key][0]);
        } else {
          formData.append(key, data[key]);
        }
      }

      const response = await axios.post("/project/projetpost", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      reset();
    } catch (error) {
      console.log(
        "error in post blog",
        error.response?.data?.error || error.message
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-full  py-10 px-4">
      <button
        type="button"
        onClick={() => navigate("/dashboard")}
        className="submit absolute right-6 top-10 px-3   text-white py-2 rounded  focus:outline-none focus:ring-2  focus:ring-opacity-50"
      >
        go back
      </button>
      <form
        className="max-w-2xl mx-auto  p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit(postProject)}
      >
        <Input
          className="mb-5"
          label="Title"
          placeholder="Title"
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters",
            },
            maxLength: {
              value: 25,
              message: "Title must be at most 25 characters",
            },
          })}
        />
        {errors.title && (
          <span className="text-sm text-red-600">{errors.title.message}</span>
        )}

        <TextArea
          className="mb-5"
          label="Description"
          placeholder="Description"
          {...register("description", {
            required: "Description is required",
            minLength: {
              value: 3,
              message: "Description must be at least 3 characters",
            },
            maxLength: {
              value: 500,
              message: "Description must be at most 500 characters",
            },
          })}
        />
        {errors.description && (
          <span className="text-sm text-red-600">
            {errors.description.message}
          </span>
        )}

        <Input
          className="mb-5"
          label="Main Image"
          type="file"
          {...register("projectImage", {
            required: "project Image is required",
          })}
        />
        {errors.mainImage && (
          <span className="text-sm text-red-600">
            {errors.mainImage.message}
          </span>
        )}

        <Input
          className="mb-5"
          label="Link"
          placeholder="Link"
          {...register("link", {
            required: "link is required",
            minLength: {
              value: 3,
              message: "link must be at least 3 characters",
            },
          })}
        />
        {errors.title && (
          <span className="text-sm text-red-600">{errors.title.message}</span>
        )}

        <Input
          className="mb-5"
          label="Sorce Code Link"
          placeholder="Sorce Code Link"
          {...register("sorceLink", {
            required: "sorce code is required",
            minLength: {
              value: 3,
              message: "sorce code must be at least 3 characters",
            },
          })}
        />
        {errors.title && (
          <span className="text-sm text-red-600">{errors.title.message}</span>
        )}

        {loading ? (
          <div className="flex justify-center mt-5">
            <img className="w-12" src={loadingGif} alt="loading" />
          </div>
        ) : (
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 px-4 py-2 text-white font-semibold rounded-md mt-5"
          >
            Post Project
          </button>
        )}
      </form>
    </div>
  );
}

export default ProjectPost;
