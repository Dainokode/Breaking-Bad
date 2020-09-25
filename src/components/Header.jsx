import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div>
      <header className="center">
        <img className="logo" src={logo} alt="logo" />
      </header>
    </div>
  );
};

export default Header;
