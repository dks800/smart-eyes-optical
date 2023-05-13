import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const GeneralComponent = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default GeneralComponent;
