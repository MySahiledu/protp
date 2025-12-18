import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./ui/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Schemes from "./pages/Schemes";
import Chatbot from "./pages/Chatbot";
import DataSources from "./pages/DataSources";

export default function App() {
  // 🌙 Dark mode
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // 🔐 Auth check
  const isAuth = localStorage.getItem("auth") === "true";

  return (
    <div className={dark ? "dark" : ""}>
      <Navbar dark={dark} setDark={setDark} />

      <Routes>
        {/* 🌐 Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🔐 Protected route */}
        <Route
          path="/dashboard"
          element={isAuth ? <Dashboard /> : <Login />}
        />

        {/* 🌐 Other pages */}
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/datasources" element={<DataSources />} />
      </Routes>
    </div>
  );
}
