import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Eyeglasses from "./components/Eyeglasses/Eyeglasses";
import Brands from "./components/Brands/Brands";
import EyeExam from "./components/Eye Exam/EyeExam";
import ContactLens from "./components/Lens/ContactLens";
import Sunglasses from "./components/Sunglasses/Sunglasses";
import { DeviceContext } from "./DeviceContext";
import { LangContext } from "./LanguageContext";
import { useState, useEffect } from "react";
import { langUtils } from "./components/utilities";
import ErrorPage from "./components/ErrorPage";
import "./App.css";

function App() {
  const lang = localStorage.getItem("lang");
  const [isWebDevice, setIsWebDevice] = useState(true);
  const [language, setLanguage] = useState(!lang ? langUtils.english : lang);
  useEffect(() => {
    const width = window?.screen?.width;
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
                <Route path="/eyeglasses" Component={Eyeglasses} />
                <Route path="/sunglasses" Component={Sunglasses} />
                <Route path="/contact-lens" Component={ContactLens} />
                <Route path="/brands" Component={Brands} />
                <Route path="/brands/:brand" Component={Brands} />
                <Route path="/exam" Component={EyeExam} />
                <Route path="*" Component={ErrorPage} />
              </Routes>
            </BrowserRouter>
          </DeviceContext.Provider>
        </LangContext.Provider>
      </div>
    </>
  );
}

export default App;
