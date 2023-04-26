import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Eyewear from "./components/Eyewear/Eyewear";
import Brands from "./components/Brands/Brands";
import EyeExam from "./components/Eye Exam/EyeExam";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact Component={Homepage} />
            <Route path="/eyewear" Component={Eyewear} />
            <Route path="/eyewear/:type" Component={Eyewear} />
            <Route path="/brands" Component={Brands} />
            <Route path="/brands/:brand" Component={Brands} />
            <Route path="/exam" Component={EyeExam} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
