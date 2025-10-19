import React, { use } from 'react';
import { NavLink } from 'react-router';
import userimg from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';
const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const signoutBtn=()=>{
    logout().then(()=>alert("logout successfully")).then(err=>alert(err.message))
  }
    return (
      <div className="flex justify-between items-center">
        <div>{user && user?.email}</div>
        <div className="nav flex gap-3 items-center text-accent">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className="flex items-center gap-3">
          <img className='w-12 h-12 rounded-full' src={user?user.photoURL:userimg} alt="" />
          {user ? (
            <button onClick={signoutBtn} className="btn btn-primary px-3">
              Logout
            </button>
          ) : (
            <NavLink to="/auth/login" className="btn btn-primary px-3">
              Login
            </NavLink>
          )}
        </div>
      </div>
    );
};

export default Navbar;