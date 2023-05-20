import Card from "./Card";
import { services as serviceList } from "../utilities";
import { useContext } from "react";
import { DeviceContext } from "../../DeviceContext";
import { services as serviceLang } from "../languageData";
import "./service.css";
import { LangContext } from "../../LanguageContext";

export default function Services() {
  const isWebDevice = useContext(DeviceContext);
  const { language } = useContext(LangContext);
  return (
    <div className="services container">
      <h1>{serviceLang.title[language]}</h1>
      <div className="content">
        {serviceList.map((card, i) => {
          return <Card key={i} data={card} />;
        })}
      </div>
      {isWebDevice && <div className="logo"></div>}
    </div>
  );
}
