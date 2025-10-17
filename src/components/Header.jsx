import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="w-[400px] py-4" src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favours</p>
      <p className="text-accent font-semibold py-3">{format(new Date(), "PPPP")}</p>
    </div>
  );
};

export default Header;
