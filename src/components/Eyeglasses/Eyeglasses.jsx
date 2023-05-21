import React, { useEffect, useContext, useRef } from "react";
import { LangContext } from "../../LanguageContext";
import { DeviceContext } from "../../DeviceContext";
import GeneralComponent from "../General/GeneralComponent";
import { eyeglassImages, eyeglassLang } from "../utilities";
import webVideo from "../../img/eyeglass/eyeglass-web.mp4";
import mobileVideo from "../../img/eyeglass/eyeglass-mobile.mp4";
import eyeGlassGIF from "../../img/eyeglass/mobile-eyewear.gif";
import "./eyeglasses.css";

function Eyeglasses() {
  const { language } = useContext(LangContext);
  const isWebDevice = useContext(DeviceContext);
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.src = webVideo;
    if (!isWebDevice) {
      videoRef.current.src = mobileVideo;
    }
  }, [isWebDevice]);
  const getImageWidth = (index) => {
    let width = 250;
    if (index >= 10 || !isWebDevice) {
      width = 380;
    }
    return width;
  };

  return (
    <>
      <GeneralComponent>
        <div className="eye-glass container">
          <div className="header-title">
            <h1>{eyeglassLang?.title[language]}</h1>
            {!isWebDevice && <img src={eyeGlassGIF} alt="Eyeglass GIF" />}
          </div>
          <div className="content">
            <p
              dangerouslySetInnerHTML={{
                __html: eyeglassLang?.description[language],
              }}
            ></p>
            <video
              ref={videoRef}
              autoPlay={true}
              loop
              controls
              muted={true}
            ></video>
            <div className="image-list">
              {eyeglassImages?.map((image, index) => {
                return (
                  <div className="eyeglass-image" key={index}>
                    <img
                      loading="lazy"
                      src={image}
                      alt="Eyeglass"
                      width={getImageWidth(index)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </GeneralComponent>
    </>
  );
}

export default Eyeglasses;
