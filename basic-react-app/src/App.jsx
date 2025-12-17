import { useState, useEffect } from "react";

import Navbar from "./ui/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Schemes from "./pages/Schemes";
import Chatbot from "./pages/Chatbot";
import DataSources from "./pages/DataSources";
import { Routes, Route } from "react-router-dom";

export default function App(){
  
  const [dark,setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";   // auto restore theme
  });

  useEffect(()=>{
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className={dark ? "dark" : ""}>
      <Navbar dark={dark} setDark={setDark}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/schemes" element={<Schemes/>}/>
        <Route path="/chatbot" element={<Chatbot/>}/>
        <Route path="/datasources" element={<DataSources/>}/>
      </Routes>
    </div>
  );
}

