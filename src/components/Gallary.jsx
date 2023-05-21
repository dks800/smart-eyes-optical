import { useContext } from "react";
import { gallaryImages } from "./utilities";
import { gallary } from "./languageData";
import { LangContext } from "../LanguageContext";
import { Carousel } from "./ImageCarousel/Carousel";

function Gallary() {
  const { language } = useContext(LangContext);
  return (
    <div className="gallary container">
      <h1>{gallary.title[language]}</h1>
      <Carousel data={gallaryImages} />
    </div>
  );
}

export default Gallary;
