import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";


import Home from "./components/Home";
import Courses from "./components/Courses";
import Live from "./components/Live";
import Contact from "./components//Contact";

export default () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <Link to="/" >
            Home
          </Link>
          <Link to="/course" >
            Courses
          </Link>
          <Link to="/live" >
            Live course
          </Link>
          <Link to="/contact" >
            Contact
          </Link>
        </ul>
      </nav>

      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/live" element={<Live />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}