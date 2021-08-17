import React from "react";
import "./YourNeeds.css";
import Banner from "../../Media/vending.png";

const YourNeeds = () => {
  return (
    <div className="needsContainer" id="who">
      <div className="textContainer">
        <h2>CATERING TO YOUR NEEDS </h2>
        <p>
          Our goal is to provide our clients with quality and affordable vending
          solutions. We give your employees and customers the vending choices
          they want while increasing productivity, providing a more pleasant
          experience to customers, and keeping your workplace satisfied.
        </p>
      </div>
      <img src={Banner} alt="" />
    </div>
  );
};

export default YourNeeds;
