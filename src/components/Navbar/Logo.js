import React from "react";
import Tilt from "react-tilt";
import logo from "./Logo.png";
import "./Logo.css"

const Logo = () => {
  return (
    <div className="ma4 mt0 on-top">
      <Tilt
        className="Tilt br2 mt3"
        options={{ max: 25 }}
        style={{ height: 80, width: 80 }}
      >
        <div className="Tilt-inner">
          {" "}
          <img src={logo} alt="human face icon" />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
