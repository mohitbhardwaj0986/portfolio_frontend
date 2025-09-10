import React from "react";
import { motion } from "framer-motion";

function Footer() {
  // Variants for staggering animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="w-full  sm:mt-24 flex flex-col mb-10 items-center justify-center">
      {/* Contact Heading */}
      <motion.h1
        className="text-center text-3xl mb-5 text-[#b3a5e5] font-medium"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h1>

      {/* Form */}
      <motion.form
        action="https://formspree.io/f/mdoqnnvw"
        method="post"
        className="max-w-2xl footer mx-auto p-6 bg-[#7d72e71b] text-black rounded-lg shadow-lg w-[90%]"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="text-2xl font-bold mb-6 text-center text-white"
          variants={item}
        >
          Fill the Form
        </motion.h1>

        {/* Name Input */}
        <motion.input
          type="text"
          className="form-input w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          name="name"
          placeholder="Enter your name"
          variants={item}
        />

        {/* Email Input */}
        <motion.input
          type="email"
          className="form-input w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          name="email"
          placeholder="Enter your email"
          variants={item}
        />

        {/* Message */}
        <motion.textarea
          name="message"
          className="form-input w-full px-4 py-2 mb-4 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          placeholder="Write here"
          variants={item}
        ></motion.textarea>

        {/* Submit Button */}
        <motion.button
          type="submit"
          value="submit"
          className="submit w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50"
          variants={item}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(59,130,246,0.7)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
}

export default Footer;
