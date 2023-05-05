import { useEffect } from "react";
import { useParams } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProductList from "./ProductList";
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
        <div className="brand-marquee"></div>
        {/* Marquee of brand logos */}
        <ProductList displayBrandLogo={true} />
      </div>
      <Footer />
    </>
  );
}

export default Brands;
