import React from "react";
import banner from "./../../img/family.jpg";
import BannerItems from "./BannerItems";
import { socialMedia } from "../utilities";
import "./banner.css";

export default function Dashboard() {
  const phoneNumber = socialMedia[socialMedia?.length - 1]?.url;
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
          <button>
            <a href={phoneNumber}>Call Us</a>
          </button>
        </div>
      </div>
      <div className="banner-hero">
        <img src={banner} alt="hero banner" loading="lazy" />
      </div>
      <BannerItems />
    </div>
  );
}
