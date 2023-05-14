import "./service.css";
import Card from "./Card";
import { services } from "../utilities";
import { useContext } from "react";
import { DeviceContext } from "../../DeviceContext";

export default function Services() {
  const isWebDevice = useContext(DeviceContext);
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
