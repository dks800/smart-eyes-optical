import { useContext } from "react";
import GeneralComponent from "../General/GeneralComponent";
import { examImages, examLang, examTypes } from "../utilities";
import { LangContext } from "../../LanguageContext";
import Slider from "infinite-react-carousel";
import "react-awesome-slider/dist/styles.css";
import "./exam.css";

function EyeExam() {
  const { language } = useContext(LangContext);
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    virtualList: true,
    duration: 20,
    arrows: true,
    pauseOnHover: false,
    swipe: true,
  };

  return (
    <>
      <GeneralComponent>
        <div className="eye-exam container">
          <h2>{examLang?.title[language]}</h2>
          <div className="content">
            <div className="show">
              <Slider {...settings}>
                {examImages?.map((image, idx) => {
                  return (
                    <div key={idx}>
                      <img loading="lazy" src={image} alt="Eye Exam" />
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="text-content">
              <p
                dangerouslySetInnerHTML={{
                  __html: examLang?.description[language],
                }}
              ></p>
              <div className="exam-types">
                {examTypes?.map((exam, idx) => {
                  return (
                    <div key={idx} className="ui-card">
                      <img loading="lazy" src={exam?.logo} alt="Exam Logo" />
                      <h4>{exam?.title[language]}</h4>
                      <p>{exam?.description[language]}</p>
                    </div>
                  );
                })}
              </div>
              <p
                className="footer-note"
                dangerouslySetInnerHTML={{
                  __html: examLang?.footerNote[language],
                }}
              ></p>
            </div>
          </div>
        </div>
      </GeneralComponent>
    </>
  );
}

export default EyeExam;
