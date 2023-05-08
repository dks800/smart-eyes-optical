import { useEffect } from "react";
import { useParams } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProductList from "./ProductList";
import { brandNames } from "../data/brandData";
import Marquee from "react-fast-marquee";
import "./brands.css";

function Brands() {
  const eyewear = useParams();

  useEffect(() => {
    if (eyewear?.brand) {
      let selectedBrand = document.querySelector(`#brand-${eyewear.brand}`);
      selectedBrand.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [eyewear?.brand]);

  return (
    <>
      <Header />
      <div className="brands container">
        <h1>Eyewear Brands</h1>
        <div className="brand-marquee">
          <Marquee>
            {brandNames.map((brand, index) => {
              return (
                <img
                  key={index}
                  src={brand.brandLogo}
                  alt="Brand Logo"
                  height={60}
                />
              );
            })}
          </Marquee>
        </div>
        <ProductList displayBrandLogo={true} />
      </div>
      <Footer />
    </>
  );
}

export default Brands;
