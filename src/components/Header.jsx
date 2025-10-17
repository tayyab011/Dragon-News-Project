import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="w-[400px] py-4" src={logo} alt="" />
      <p>Journalism Without Fear or Favours</p>
    </div>
  );
};

export default Header;
