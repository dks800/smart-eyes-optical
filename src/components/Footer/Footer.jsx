import logo2 from "../../img/logo-mobile.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LangContext } from "../../LanguageContext";
import { footerNavigation, footerDetails } from "../utilities";
import "./footer.css";

function Footer() {
  const { language } = useContext(LangContext);

  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <div className="address">
            <h5>{footerDetails?.address[language]}:</h5>
            <p
              dangerouslySetInnerHTML={{
                __html: footerDetails?.headOffice[language],
              }}
            ></p>
            <p
              dangerouslySetInnerHTML={{
                __html: footerDetails?.branch[language],
              }}
            ></p>
          </div>
          <div className="phone">
            <h5>{footerDetails?.phone?.title[language]}:</h5>
            {footerDetails?.phone?.numbers?.map((number, index) => {
              return <p key={index}>{number}</p>;
            })}
          </div>
          <div className="Email">
            <h5>{footerDetails?.email?.title[language]}:</h5>
            <p>{footerDetails?.email?.value}</p>
          </div>
        </div>
        <div className="middle">
          {footerNavigation?.length > 0 &&
            footerNavigation.map((data, idx) => {
              return (
                <div key={idx}>
                  <h5>{data?.title[language]}</h5>
                  <ul>
                    {data?.items?.map((item, id) => {
                      return (
                        <li key={id} title={item?.name[language]}>
                          <Link to={item?.path}>{item.name[language]}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
        </div>
        <div className="right">
          <img loading="lazy" src={logo2} alt="Footer Logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
