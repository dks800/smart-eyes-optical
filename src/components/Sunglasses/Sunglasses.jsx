import { useEffect, useRef, useContext, useState } from "react";
import GeneralComponent from "../General/GeneralComponent";
import anatomyEN from "../../img/sunglasses/anatomy-en.jpg";
import anatomyPT from "../../img/sunglasses/anatomy-pt.jpg";
import mobileVideo from "../../img/sunglasses/mobile-sunglass.mp4";
import webVideo from "../../img/sunglasses/web-sunglass.mp4";
import { langUtils, sunglasses, sunglassLang } from "../utilities";
import sunTitle from "../../img/sunglasses/title-sun.gif";
import { DeviceContext } from "../../DeviceContext";
import { LangContext } from "../../LanguageContext";
import "./sunglasses.css";

const Sunglasses = () => {
  const videoRef = useRef(null);
  const [imageSource, setImageSource] = useState("");
  const isWebDevice = useContext(DeviceContext);
  const { language } = useContext(LangContext);
  useEffect(() => {
    if (!isWebDevice) {
      videoRef.current.src = mobileVideo;
    } else {
      videoRef.current.src = webVideo;
    }
  }, [isWebDevice]);

  useEffect(() => {
    language === langUtils.english
      ? setImageSource(anatomyEN)
      : setImageSource(anatomyPT);
  }, [language]);

  return (
    <GeneralComponent>
      <div className="sunglasses container">
        <div className="title-container">
          <h1>{sunglassLang?.title[language]}</h1>
          {!isWebDevice && <img src={sunTitle} alt="Title" loading="lazy" />}
        </div>

        <div className="content">
          <p
            dangerouslySetInnerHTML={{
              __html: sunglassLang?.description[language],
            }}
          ></p>
          <video
            ref={videoRef}
            autoPlay={true}
            loop
            controls
            muted={true}
          ></video>
          <img
            src={imageSource}
            className="anatomy"
            alt="Sun Glasses Anatomy"
          />
          <div className="sunglass-list left-aligned">
            {sunglasses?.map((glass, index) => {
              return (
                <img key={index} src={glass} alt="Sunglasses" height={350} />
              );
            })}
          </div>
        </div>
      </div>
    </GeneralComponent>
  );
};

export default Sunglasses;
