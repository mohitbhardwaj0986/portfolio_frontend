import React from "react";

function Footer() {
  return (
    <div className="w-full h-[70vh] sm:mt-24">
        <h1 className="text-center text-3xl mb-5 text-[#b3a5e5] font-medium">Contact us</h1>
      <form
        action="https://formspree.io/f/mdoqnnvw"
        method="post"
        className="max-w-2xl footer mx-auto p-6 bg-[#7d72e71b] text-black rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          Fill the Form
        </h1>
        <input
          type="text"
          className="form-input w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          name="name"
          placeholder="Enter your name"
        />
        <input
          type="email"
          className="form-input w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          name="email"
          placeholder="Enter your email"
        />
        <textarea
          name="message"
          className="form-input w-full px-4 py-2 mb-4 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          placeholder="Write here"
        ></textarea>
        <button
          type="submit"
          value="submit"
          className="submit w-full  text-white py-2 rounded  focus:outline-none focus:ring-2  focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Footer;
