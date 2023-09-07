import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import myPic from "../../img/myPic.png";
import thumbsup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassImoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

export default function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hey! I am</span>
          <span> Priyanka Padhi </span>
          <span>
            Full Stack Developer, highly committed towards the work, to make the
            User Experience better with boundless innovation.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a
            href="https://github.com/PriyankaPadhi02/My-Portfolio"
            target="_blank"
          >
            <img src={Github} alt="github image" />
          </a>
          <img src={LinkedIn} alt="linkedin image" />
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt="vector1 image" />
        <img src={vector2} alt="vector2 image" />
        <img src={myPic} alt="myPic image" />
        <img src={glassImoji} alt="SwagImoji" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv img={crown} txtWeb="Web" txtDev="Developer" />
        </div>
        <div style={{ top: "18rem", left: "-3rem" }}>
          <FloatingDiv img={thumbsup} txtWeb="Get" txtDev="Best Experience" />
        </div>
        {/* Blur Divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{ background: "#C1F5FF", top: "16rem", left: "-7rem" }}
        ></div>
      </div>
    </div>
  );
}
