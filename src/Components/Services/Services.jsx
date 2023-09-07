import React from "react";
import "./Services.css";
import HeartImoji from "../../img/heartemoji.png";
import glass from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";

export default function () {
  return (
    <div className="services">
      {/* left-side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem Ipsum is simply dummy text of the printing and thendsjd
          somethoing lorem ipsum <br />
          and make a type specimen book.
        </span>
        <a href={Resume} download>
          <button className="button cv-button">Download CV</button>
        </a>
        {/* <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div> */}
      </div>

      {/* right-side */}
      <div className="cards">
        <div style={{ left: "12rem" }}>
          <Card
            emoji={HeartImoji}
            heading={"Design"}
            detail={"Beyond the imagination"}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={glass}
            heading={"Developer"}
            detail={"Full Stack Developer"}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Get the best experience"}
          />
        </div>
      </div>
    </div>
  );
}
