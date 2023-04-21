import React, { Suspense } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import AboutUs from "./components/AboutUs/AboutUs";
import Optometrist from "./components/Optometrist/Optometrist";
import Gallary from "./components/Gallary";
import ContactUs from "./components/Contact/ContactUs";
import Footer from "./components/Footer/Footer";

const Services = React.lazy(() => import("./components/Services/Services"));

function App() {
  // Header - Logo + Navigation
  // Home Page
  // Modules
  // Footer

  return (
    <div className="App">
      <Header />
      <Dashboard />
      <AboutUs />
      <Suspense fallback={<div>Loading...</div>}>
        <Services />
      </Suspense>
      <Gallary />
      <Optometrist />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
