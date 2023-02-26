import React from "react";
import "./style.css";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';


export default function Career() {
  return (
    <div>
    <h1>This is career page</h1>
    <Link to="/">Back to home</Link>
    </div>
  );
}
