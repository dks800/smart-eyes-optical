import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const GeneralComponent = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default GeneralComponent;
