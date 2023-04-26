import React from "react";
import { useParams } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Eyewear() {
  const type = useParams();
  console.log(type);
  return (
    <>
      <Header />
      <div>
        <h1>Eyewear</h1>
      </div>
      <Footer />
    </>
  );
}

export default Eyewear;
