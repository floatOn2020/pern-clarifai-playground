import React from 'react';
import Navigation from "./Navigation";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <Logo />
      <Navigation />

    </div>
  )
}

export default Navbar;
