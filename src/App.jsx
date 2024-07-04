import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SkillPost from "./pages/SkillPost"; // Corrected the typo
import ProjectPost from "./pages/ProjectPost";
import Login from "./auth/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/postskill" element={<SkillPost />} />
        <Route path="/postproject" element={<ProjectPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
