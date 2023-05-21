import { useEffect, useContext } from "react";
import { useParams } from "react-router";
import GeneralComponent from "../General/GeneralComponent";
import ProductList from "./ProductList";
import { brandNames } from "../data/brandData";
import Marquee from "react-fast-marquee";
import { LangContext } from "../../LanguageContext";
import { brandLang } from "../utilities";
import "./brands.css";

function Brands() {
  const eyewear = useParams();
  const { language } = useContext(LangContext);

  useEffect(() => {
    if (eyewear?.brand) {
      const selectedBrand = document.querySelector(`#brand-${eyewear.brand}`);
      selectedBrand.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [eyewear?.brand]);

  return (
    <>
      <GeneralComponent>
        <div className="brands container">
          <h1>{brandLang?.title[language]}</h1>
          <p> {brandLang?.description[language]}</p>
          <div className="brand-marquee">
            <Marquee>
              {brandNames.map((brand, index) => {
                return (
                  <img
                    loading="lazy"
                    key={index}
                    src={brand.brandLogo}
                    alt="Brand Logo"
                    height={60}
                  />
                );
              })}
            </Marquee>
          </div>
          <ProductList displayBrandLogo={true} lang={language} />
        </div>
      </GeneralComponent>
    </>
  );
}

export default Brands;
