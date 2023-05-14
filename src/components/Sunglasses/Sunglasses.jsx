import GeneralComponent from "../General/GeneralComponent";
import anatomy from "../../img/sunglasses/sunglasses-anatomy.jpg";
import mobileVideo from "../../img/sunglasses/mobile-sunglass.mp4";
import webVideo from "../../img/sunglasses/web-sunglass.mp4";
import { sunglasses } from "../utilities";
import sunTitle from "../../img/sunglasses/title-sun.gif";
import { useEffect, useRef, useContext } from "react";
import { DeviceContext } from "../../DeviceContext";
import "./sunglasses.css";

const Sunglasses = () => {
  const videoRef = useRef(null);
  const isWebDevice = useContext(DeviceContext);
  useEffect(() => {
    if (!isWebDevice) {
      videoRef.current.src = mobileVideo;
    } else {
      videoRef.current.src = webVideo;
    }
  }, [isWebDevice]);

  return (
    <GeneralComponent>
      <div className="sunglasses container">
        <div className="title-container">
          <h1>Sun Glasses</h1>
          {!isWebDevice && <img src={sunTitle} alt="Title" loading="lazy" />}
        </div>

        <div className="content">
          <video
            ref={videoRef}
            autoPlay={true}
            loop
            controls
            muted={true}
          ></video>
          <img src={anatomy} className="anatomy" alt="Sun Glasses Anatomy" />
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
