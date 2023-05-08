import Dashboard from "./components/Dashboard/Dashboard";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import Gallary from "./components/Gallary";
import Optometrist from "./components/Optometrist/Optometrist";
import ContactUs from "./components/Contact/ContactUs";
import GeneralComponent from "./components/General/GeneralComponent";

function Homepage() {
  return (
    <>
      <GeneralComponent>
        <Dashboard />
        <AboutUs />
        <Services />
        <Gallary />
        <Optometrist />
        <ContactUs />
      </GeneralComponent>
    </>
  );
}

export default Homepage;
