import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <circle cx="24" cy="24" r="22" fill="#FFFFFF" />
          <path fill="#1b2021" d="M17 9v30l20-15z" />
        </svg>
        <h1>Video Player</h1>
      </div>
    </nav>
  );
};

export default Navbar;
