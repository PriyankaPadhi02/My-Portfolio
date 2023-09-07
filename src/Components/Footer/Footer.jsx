import React from "react";
import "./Footer.css";
import Wave from '../../img/wave.png';
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>padhipriyanka02@gmail.com</span>
        <div className="f-icons">
        <img src={Github} alt="github image" />
          <img src={LinkedIn} alt="linkedin image" />
          {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} /> */}
        </div>
      </div>
    </div>
  );
}
