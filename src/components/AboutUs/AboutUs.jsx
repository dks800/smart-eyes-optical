import React, { useRef } from "react";
import lenseVideo from "../../video/lense.webm";
import mobileLenseVideo from "../../video/lense-mobile.webm";
import { useState, useEffect, useContext } from "react";
import { DeviceContext } from "../../DeviceContext";
import "./about.css";

function AboutUs() {
  let isWebDevice = useContext(DeviceContext);
  const [imgUrl, setImgUrl] = useState(null);
  const vidRef = useRef(null);
  useEffect(() => {
    if (!isWebDevice) {
      let url = require("../../img/logo-board.png");
      vidRef.current.src = mobileLenseVideo;
      setImgUrl(url);
    } else {
      vidRef.current.src = lenseVideo;
    }
  }, [isWebDevice]);

  return (
    <div className="about-us container">
      <h1>About Us</h1>
      <div>
        {isWebDevice && imgUrl && (
          <img src={imgUrl} alt="about section" loading="lazy" />
        )}
        <div className="text-content">
          <p>
            Welcome to <strong>Smart Eyes Opticals</strong>, where our mission
            is to provide exceptional eye care services to our patients. We are
            a team of dedicated optometrists who are committed to preserving and
            enhancing the gift of sight.
          </p>
          <p>
            At our clinic, we understand the importance of healthy eyes and the
            role they play in our daily lives. We are committed to providing
            comprehensive eye exams, personalized treatment plans, and the
            latest in eye care technology to ensure that our patients receive
            the best possible care.
          </p>
          <p>
            Our team of highly trained optometrists, opticians, and staff
            members work together to provide a comfortable and welcoming
            environment for our patients. We strive to create a personalized
            experience for each patient and take the time to listen to their
            concerns and needs.
          </p>
        </div>
      </div>
      <video
        ref={vidRef}
        width={1000}
        controls
        muted={true}
        autoPlay
        loop
      ></video>
    </div>
  );
}

export default AboutUs;
