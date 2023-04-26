import { useParams } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./brands.css";

function Brands() {
  const brand = useParams();
  console.log(brand);
  return (
    <>
      <Header />
      <div className="brands container">
        <h1>Brands</h1>
      </div>
      <Footer />
    </>
  );
}

export default Brands;
