import React from "react";
import "./style.css";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';


export default function About() {
  return (
    <div>
    <h1>This is About page</h1>
    <p></p>
    <Link to="/Career">Career </Link>
    {<br/>}
    <Link to="/">Back to home</Link>
    </div>
  );
}
