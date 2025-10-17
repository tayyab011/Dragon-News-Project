import React from 'react';
import { NavLink } from 'react-router';
import userimg from "../assets/user.png"
const Navbar = () => {
    return (
      <div className="flex justify-between items-center">
        <div></div>
        <div className="nav flex gap-3 items-center text-accent">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className="flex items-center gap-3">
          <img src={userimg} alt="" />
          <button className="btn btn-primary px-3">Login</button>
        </div>
      </div>
    );
};

export default Navbar;