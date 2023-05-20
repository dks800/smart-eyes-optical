import { gallaryImages } from "./utilities";
import { Carousel } from "react-responsive-carousel";
import { gallary } from "./languageData";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.css";
import { useContext } from "react";
import { LangContext } from "../LanguageContext";

function Gallary() {
  const { language } = useContext(LangContext);
  return (
    <div className="gallary container">
      <h1>{gallary.title[language]}</h1>
      <Carousel showArrows={true}>
        {gallaryImages.map((img, idx) => {
          return (
            <div key={idx}>
              <img loading="lazy" src={img} alt="Gallery" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Gallary;
