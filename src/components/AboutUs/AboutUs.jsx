import React, { useRef } from "react";
import lenseVideo from "../../video/lense.webm";
import mobileLenseVideo from "../../video/lense-mobile.webm";
import { useState, useEffect, useContext } from "react";
import { DeviceContext } from "../../DeviceContext";
import { LangContext } from "../../LanguageContext";
import { aboutUs } from "../languageData";
import "./about.css";

function AboutUs() {
  const isWebDevice = useContext(DeviceContext);
  const { language } = useContext(LangContext);
  const [imgUrl, setImgUrl] = useState(null);
  const vidRef = useRef(null);
  useEffect(() => {
    if (!isWebDevice) {
      vidRef.current.src = mobileLenseVideo;
    } else {
      const url = require("../../img/logo-board.png");
      setImgUrl(url);
      vidRef.current.src = lenseVideo;
    }
  }, [isWebDevice]);

  return (
    <div className="about-us container">
      <h1>{aboutUs?.title[language]}</h1>
      <div className="details">
        {isWebDevice && imgUrl && (
          <img src={imgUrl} alt="about section" loading="lazy" />
        )}
        <div className="text-content">
          {aboutUs?.content?.map((data, index) => {
            return (
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: data[language] }}
              ></p>
            );
          })}
        </div>
      </div>
      <video ref={vidRef} controls muted={true} autoPlay loop></video>
    </div>
  );
}

export default AboutUs;
