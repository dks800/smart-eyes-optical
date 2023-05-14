import { useState, useContext } from "react";
import GeneralComponent from "../General/GeneralComponent";
import { lensTypes } from "../utilities";
import { useEffect } from "react";
import mobileLens from "../../img/contact-lens/mobile-lens.mp4";
import { lensImages } from "../utilities";
import { DeviceContext } from "../../DeviceContext";
import "./lens.css";

const ContactLens = () => {
  const isWebDevice = useContext(DeviceContext);
  const scrollDown = (e) => {
    e.preventDefault();
    let toBottom = document?.querySelector("body")?.offsetHeight;
    window.scrollTo({ top: toBottom, behavior: "smooth" });
  };
  return (
    <>
      <GeneralComponent>
        <div className="contact-lens container">
          <h1>Contact Lens</h1>
          <div className="content">
            {isWebDevice && <div className="lens"></div>}
            <p>
              <strong>GYAN</strong>, Optometrist at Smart Eyes Optical is
              Contact Lens Specialist. He has over a decade of professional
              experience in this field.
            </p>
            <p>
              Get in touch at our branch to know about special offers for you.
              <button className="scroll-down" onClick={(e) => scrollDown(e)}>
                Click here
              </button>
            </p>
            {!isWebDevice && (
              <video
                autoPlay={true}
                loop
                controls
                muted={true}
                src={mobileLens}
              ></video>
            )}
            <div className="lens-images">
              {lensImages?.map((lens, index) => {
                return <img src={lens} key={index} alt="Lens" loading="lazy" />;
              })}
            </div>
            <h2>Types of Eyewear Lens</h2>
            {lensTypes?.map((lens, index) => {
              return (
                <div className="lens-type" key={index}>
                  <img src={lens.url} alt="Lens" />
                  <div>
                    <h3>{lens.name}</h3>
                    <h5>{lens.description}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </GeneralComponent>
    </>
  );
};

export default ContactLens;
