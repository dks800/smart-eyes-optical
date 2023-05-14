import React, { useContext } from "react";
import logo from "./../../img/logo.JPG";
import langIcon from "../../img/lang-icon.png";
import { Link } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import { LangContext } from "../../LanguageContext";
import { langUtils } from "../utilities";
import "./navigation.css";

export default function Navigation() {
  const { language, setLanguage } = useContext(LangContext);
  const changeLanguage = (value) => {
    setLanguage(value);
    localStorage.setItem("lang", value);
  };
  return (
    <div className="navigation">
      <Link to="/">
        <img src={logo} alt="Logo" height="50" loading="lazy" />{" "}
      </Link>
      <NavigationLinks lang={language} />
      <div className="language" title="Change Language">
        <img src={langIcon} alt="Language" loading="lazy" />
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          defaultValue={language}
        >
          <option value={langUtils.english}>English</option>
          <option value={langUtils.portugese}>Português</option>
        </select>
      </div>
    </div>
  );
}
