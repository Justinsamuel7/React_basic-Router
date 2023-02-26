import React from "react";
import "./style.css";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from "./Home"
import Career from "./Career"
import About from "./About"


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Career" element={<Career/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </div>
  );
}
