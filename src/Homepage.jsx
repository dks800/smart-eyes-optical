import Dashboard from "./components/Dashboard/Dashboard";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import Gallary from "./components/Gallary";
import Optometrist from "./components/Optometrist/Optometrist";
import ContactUs from "./components/Contact/ContactUs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Homepage() {
  return (
    <>
      <Header />
      <Dashboard />
      <AboutUs />
      <Services />
      <Gallary />
      <Optometrist />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Homepage;
