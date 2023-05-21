import { socialMedia } from "../utilities";
import logo3 from "../../img/logo3.JPG";
import { useContext } from "react";
import { LangContext } from "../../LanguageContext";
import { contactUs as contactLang } from "../languageData";
import "./contact.css";

function ContactUs() {
  const { language } = useContext(LangContext);
  return (
    <div className="contactus">
      <h1>{contactLang.title[language]}</h1>
      <div className="container">
        <div className="map">
          <h4>{contactLang.subTitleLeft[language]}</h4>
          <iframe
            title="Smart Eyes Optical"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.2372238887847!2d32.45373046057435!3d-25.960259210902205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee685d512d2babd%3A0xa8969e46c60cb569!2sSmart%20Eyes%20Optical%2C%20Lda!5e0!3m2!1sen!2sin!4v1682061054549!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="social">
          <h4>{contactLang.subTitleRight[language]}</h4>
          <img
            loading="lazy"
            src={logo3}
            className="banner"
            alt="Contact Us Logo"
          />
          <div className="accounts">
            {socialMedia.map((item, idx) => {
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="__blank"
                  style={{ "--hover-color": item.color }}
                >
                  <img loading="lazy" src={item.imgUrl} alt="Social Media" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
