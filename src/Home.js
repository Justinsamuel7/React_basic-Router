import React from 'react';
import './style.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Hello This is home page!</h1>
      <Link to="/About">About </Link>
      {<br/>}
      <Link to="/Career">Career</Link>
    </div>
  );
}
