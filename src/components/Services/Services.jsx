import "./service.css";
import Card from "./Card";
import { services } from "../utilities";
import { useEffect, useState } from "react";

export default function Services() {
  const [isWebDevice, setIsWebDevice] = useState(true);
  useEffect(() => {
    let width = window?.screen?.width;
    if (width < 480) setIsWebDevice(false);
  }, []);

  return (
    <div className="services container">
      <h1>Our Services</h1>
      <div className="content">
        {services.map((card, i) => {
          return <Card key={i} data={card} />;
        })}
      </div>
      {isWebDevice && <div className="logo"></div>}
    </div>
  );
}
