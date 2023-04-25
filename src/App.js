import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { RouterProvider } from "react-router";
import router from "./components/router";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}

export default App;
