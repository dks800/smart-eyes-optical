import React, { useContext } from "react";
import { LangContext } from "../../LanguageContext";
import optom from "../../img/optom.jpg";
import { optomLang } from "../languageData";
import "./optometrist.css";

function Optometrist() {
  const { language } = useContext(LangContext);
  return (
    <div className="optom container">
      <h1>{optomLang.title[language]}</h1>
      <div>
        <img loading="lazy" src={optom} alt="Optometrist" />
        <h2>Gyan Paliwal</h2>
        <h3>{optomLang.designation[language]}</h3>
      </div>
      <div className="content">
        {optomLang?.content?.map((data, index) => {
          return (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: data[language] }}
            ></p>
          );
        })}
      </div>
    </div>
  );
}

export default Optometrist;
