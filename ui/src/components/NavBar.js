import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Survey Designer</div>
      <div className="navbar-buttons">
        <button className="navbar-button">Sign Up</button>
        <button className="navbar-button">Sign In</button>
      </div>
    </nav>
  );
}

export default NavBar;
