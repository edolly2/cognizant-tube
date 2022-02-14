import { BsFillBellFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../_assests/cognizant-tube-logo.png";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="site-brand">
        <img className="logo" src={Logo} alt="#" />
        <h1>COGNIZANT</h1>
      </div>
      <div className="menu-icon">
        <CgMenuGridR />
        <BsFillBellFill />
        <FaUserCircle className="user-icon" />
      </div>
    </header>
  );
};

export default Header;
