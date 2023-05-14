import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Eyewear from "./components/Eyewear/Eyewear";
import Brands from "./components/Brands/Brands";
import EyeExam from "./components/Eye Exam/EyeExam";
import ContactLens from "./components/Lens/ContactLens";
import Sunglasses from "./components/Sunglasses/Sunglasses";
import { DeviceContext } from "./DeviceContext";
import { LangContext } from "./LanguageContext";
import { useState, useEffect } from "react";
import { langUtils } from "./components/utilities";
import "./App.css";

/*
    TODO:
    1. Eye wear - Pending
    2. Language:
      i) Dashboard
      ii) About US
      iii) Services
      iv) Gallary
      v) Optometrist
      vi) Contact US
      vii) Eyewear
      viii) Sun Glasses
      ix) Contact Lens
      x) Brand
      xi) exam
  */

function App() {
  const lang = localStorage.getItem("lang");
  const [isWebDevice, setIsWebDevice] = useState(true);
  const [language, setLanguage] = useState(!lang ? langUtils.english : lang);
  useEffect(() => {
    let width = window?.screen?.width;
    if (width < 480) setIsWebDevice(false);
    if (!lang) {
      localStorage.setItem("lang", langUtils.english);
      setLanguage(langUtils.english);
    }
  }, [lang]);
  return (
    <>
      <div className="App">
        <LangContext.Provider value={{ language, setLanguage }}>
          <DeviceContext.Provider value={isWebDevice}>
            <BrowserRouter>
              <Routes>
                <Route path="/" exact Component={Homepage} />
                <Route path="/eyewear" Component={Eyewear} />
                <Route path="/sunglasses" Component={Sunglasses} />
                <Route path="/contact-lens" Component={ContactLens} />
                <Route path="/brands" Component={Brands} />
                <Route path="/brands/:brand" Component={Brands} />
                <Route path="/exam" Component={EyeExam} />
              </Routes>
            </BrowserRouter>
          </DeviceContext.Provider>
        </LangContext.Provider>
      </div>
    </>
  );
}

export default App;
