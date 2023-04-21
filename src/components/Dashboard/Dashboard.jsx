import React from "react";
import banner from "./../../img/family.jpg";
import "./banner.css";

export default function Dashboard() {
  return (
    <div className="dashboard container">
      <div className="banner-name">
        <div className="title">Smart Eyes</div>
        <div className="name-trail">Optical</div>
        <div className="banner-text">
          <p>
            Find the perfect vision solution just for you from our wide range of
            designer eyewear and lenses tailored to your needs.
          </p>
        </div>
        <div className="banner-buttons">
          <button>Call Us</button>
        </div>
      </div>
      <div className="banner-hero">
        <img src={banner} alt="hero banner" loading="lazy" />
      </div>
      <div className="banner-items">
        <div>ABC</div>
        <div>CDE</div>
        <div>PQR</div>
        <div>XYZ</div>
      </div>
    </div>
  );
}
