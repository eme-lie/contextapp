import React from "react";

const Navbar = () => {
  return (
    <nav className="p-2">
      <h1 className="text-blue-500">The Book App</h1>
      <ul className="p-0">
        <li className="inline-block mx-2">Home</li>
        <li className="inline-block mx-2">About</li>
        <li className="inline-block mx-2">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
