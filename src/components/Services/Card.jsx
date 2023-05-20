import { useContext } from "react";
import { LangContext } from "../../LanguageContext";

function Card(props) {
  const { language } = useContext(LangContext);
  const { title, url } = props.data;
  return (
    <div className="card">
      <div className="image">
        <img src={url} alt={title[language]} loading="lazy" />
      </div>
      <div className="title">{title[language]}</div>
    </div>
  );
}

export default Card;
