import React from 'react';
import Navigation from "./Navigation";
import Logo from "./Logo";
import "./Navbar.css";


const Navbar = ({signedIn, routing}) => {
  return (
    <nav className="flex justify-between">
      <Logo />
      <Navigation
        signedIn={signedIn}
        routing={routing}
        />
    </nav>
  )
}

export default Navbar;
