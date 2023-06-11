import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { HiMenu,HiX } from "react-icons/hi";

const Navbar = () => {
  const [isX, setIsX] = useState(true);
  return (
    <nav className="navbar">
      <h3 className="logo">Logo</h3>
      <ul className={isX? "nav-links-mobile": "nav-links"} onClick={()=>setIsX(false)}>
        <NavLink to="/" className="home">
          Home
        </NavLink>
        <NavLink to="/about" className="about">
          About
        </NavLink>
        <NavLink to="/explores" className="explore">
          Explore
        </NavLink>
        <NavLink to="/dashboard" className="dashboard">
          Dashboard
        </NavLink>
        <NavLink to="/login" className="login">
          Login
        </NavLink>
      </ul>
      <button className="mobile-icon" onClick={()=>setIsX(!isX)}>
        {
          isX? <HiX/> : <HiMenu/>
        }
      </button>
    </nav>
  );
};

export default Navbar;
