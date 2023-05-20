import React, { useContext } from "react";
import banner from "./../../img/family.jpg";
import BannerItems from "./BannerItems";
import { socialMedia } from "../utilities";
import { LangContext } from "../../LanguageContext";
import { dashboard } from "../languageData";
import "./banner.css";

export default function Dashboard() {
  const { language } = useContext(LangContext);
  const phoneNumber = socialMedia[socialMedia?.length - 1]?.url;
  return (
    <div className="dashboard container">
      <div className="banner-name">
        <div className="title">{dashboard?.appName}</div>
        <div className="name-trail">{dashboard?.nameTrail}</div>
        <div className="banner-text">
          <p>{dashboard?.banner[language]}</p>
        </div>
        <div className="banner-buttons">
          <a href={phoneNumber}>
            <button>{dashboard?.bannerButton[language]}</button>
          </a>
        </div>
      </div>
      <div className="banner-hero">
        <img src={banner} alt="hero banner" loading="lazy" />
      </div>
      <BannerItems lang={language} />
    </div>
  );
}
