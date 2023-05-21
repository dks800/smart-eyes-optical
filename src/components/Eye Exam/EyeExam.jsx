import { useContext } from "react";
import GeneralComponent from "../General/GeneralComponent";
import { examImages, examLang, examTypes } from "../utilities";
import { LangContext } from "../../LanguageContext";
import { Carousel } from "../ImageCarousel/Carousel";
import "./exam.css";

function EyeExam() {
  const { language } = useContext(LangContext);

  return (
    <>
      <GeneralComponent>
        <div className="eye-exam container">
          <h2>{examLang?.title[language]}</h2>
          <div className="content">
            <div className="show">
              <Carousel data={examImages}></Carousel>
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
