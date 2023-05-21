import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const GeneralComponent = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Navigation />
      {props.children}
      <Footer />
    </>
  );
};

export default GeneralComponent;
