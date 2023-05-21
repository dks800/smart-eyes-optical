import { useContext } from "react";
import GeneralComponent from "../General/GeneralComponent";
import { lensTypes } from "../utilities";
import mobileLens from "../../img/contact-lens/mobile-lens.mp4";
import { lensImages } from "../utilities";
import { DeviceContext } from "../../DeviceContext";
import { LangContext } from "../../LanguageContext";
import { lensPageLang } from "../utilities";
import "./lens.css";

const ContactLens = () => {
  const isWebDevice = useContext(DeviceContext);
  const { language } = useContext(LangContext);
  const scrollDown = (e) => {
    e.preventDefault();
    const toBottom = document?.querySelector("body")?.offsetHeight;
    window.scrollTo({ top: toBottom, behavior: "smooth" });
  };
  return (
    <>
      <GeneralComponent>
        <div className="contact-lens container">
          <h1>{lensPageLang.title[language]}</h1>
          <div className="content">
            {isWebDevice && <div className="lens"></div>}
            <p
              dangerouslySetInnerHTML={{
                __html: lensPageLang.description[language],
              }}
            ></p>
            <p>
              {lensPageLang?.getInTouch[language]}
              <button className="scroll-down" onClick={(e) => scrollDown(e)}>
                {lensPageLang?.clickHere[language]}
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
            <h2>{lensPageLang?.typeDescription[language]}</h2>
            {lensTypes?.map((lens, index) => {
              return (
                <div className="lens-type" key={index}>
                  <img src={lens?.url} alt="Lens" />
                  <div>
                    <h3>{lens?.name[language]}</h3>
                    <h5>{lens?.description[language]}</h5>
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
