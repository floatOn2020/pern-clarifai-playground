import React from 'react';
import Navigation from "./Navigation";
import Logo from "./Logo";

const Navbar = ({signedIn, routing}) => {
  return (
    <div className="flex justify-between">
      <Logo />
      <Navigation
        signedIn={signedIn}
        routing={routing}
        />
    </div>
  )
}

export default Navbar;
