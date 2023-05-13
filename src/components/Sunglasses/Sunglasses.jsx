import GeneralComponent from "../General/GeneralComponent";
import anatomy from "../../img/sunglasses/sunglasses-anatomy.jpg";
import mobileVideo from "../../img/sunglasses/mobile-sunglass.mp4";
import webVideo from "../../img/sunglasses/web-sunglass.mp4";
import { sunglasses } from "../utilities";
import "./sunglasses.css";
import sunTitle from "../../img/sunglasses/title-sun.gif";
import { useEffect, useState } from "react";
import { useRef } from "react";

const Sunglasses = () => {
  const videRef = useRef(null);
  const [isWebDevice, setIsWebDevice] = useState(null);
  useEffect(() => {
    let width = window?.screen?.width;
    if (width < 480) {
      videRef.current.src = mobileVideo;
      setIsWebDevice(false);
    } else {
      videRef.current.src = webVideo;
      setIsWebDevice(true);
    }
  }, []);

  return (
    <GeneralComponent>
      <div className="sunglasses container">
        <div className="title-container">
          <h1>Sun Glasses</h1>
          {!isWebDevice && <img src={sunTitle} alt="Title" loading="lazy" />}
        </div>

        <div className="content">
          <video
            ref={videRef}
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
