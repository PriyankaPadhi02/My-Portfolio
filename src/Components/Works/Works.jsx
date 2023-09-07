import React from "react";
import "./Works.css";
import "../Services/Services.css";
import Amazon from "../../img/amazon.png";
import fb from "../../img/Facebook.png";
import Fiver from "../../img/fiverr.png";
import Shopify from "../../img/Shopify.png";
import Upwork from "../../img/Upwork.png";

export default function Works() {
  return (
    <div className="works">
      {/* left side */}
      <div className="awesome">
        <span>Works for all these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem Ipsum is simply dummy text of the printing and thendsjd
          somethoing lorem ipsum <br />
          and make a type specimen book, some dummy text. Lorem Ipsum is simply
          dummy text of the printing
          <br />
          orem Ipsum is simply dummy text of the printing and thendsjd
          somethoing lorem ipsum orem Ipsum is <br />
          simply dummy text of the printing and thendsjd somethoing lorem ipsum
        </span>
        <br />
        <button className="button i-button">Hire me</button>
        {/* <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div> */}
      </div>
      {/* right-side */}
      <div className="w-right">
        <div className="main-circle">
          <div className="icon-circle">
            <img src={Upwork} alt="" />
          </div>
          <div className="icon-circle">
            <img src={Fiver} alt="" />
          </div>
          <div className="icon-circle">
            <img src={Amazon} alt="" />
          </div>
          <div className="icon-circle">
            <img src={Shopify} alt="" />
          </div>
          <div className="icon-circle">
            <img src={fb} alt="" />
          </div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </div>
  );
}
