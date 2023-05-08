import GeneralComponent from "../General/GeneralComponent";
import { examImages } from "../utilities";
import Slider from "infinite-react-carousel";
import "react-awesome-slider/dist/styles.css";
import { examTypes } from "../utilities";
import "./exam.css";

function EyeExam() {
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
          <h2>Eye Exam</h2>
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
              <p>
                With highly advance equipments at
                <strong> Smart Eyes Optical</strong>, we diagnose patients with
                various tests as follows:
              </p>
              <div className="exam-types">
                {examTypes?.map((exam, idx) => {
                  return (
                    <div key={idx} className="ui-card">
                      <img loading="lazy" src={exam.logo} alt="Exam Logo" />
                      <h4>{exam.title}</h4>
                      <p>{exam.description}</p>
                    </div>
                  );
                })}
              </div>

              <p className="footer-note">
                After the exam, we discuss exam findings with the patient and
                recommend any necessary treatment or further testing. We may
                also provide a prescription for glasses or contact lenses if
                needed.&nbsp;
                <strong>
                  Regular eye exams are important for maintaining good eye
                  health and detecting any potential problems early.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </GeneralComponent>
    </>
  );
}

export default EyeExam;
