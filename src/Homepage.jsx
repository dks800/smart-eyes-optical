import Dashboard from "./components/Dashboard/Dashboard";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import Gallary from "./components/Gallary";
import Optometrist from "./components/Optometrist/Optometrist";
import ContactUs from "./components/Contact/ContactUs";

function Homepage() {
  return (
    <>
      <Dashboard />
      <AboutUs />
      <Services />
      <Gallary />
      <Optometrist />
      <ContactUs />
    </>
  );
}

export default Homepage;
