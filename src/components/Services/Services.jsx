import "./service.css";
import Card from "./Card";
import { services } from "../utilities";

export default function Services() {
  return (
    <div className="services container">
      <h1>Our Services</h1>
      <div className="content">
        {services.map((card, i) => {
          return <Card key={i} data={card} />;
        })}
      </div>
      <div className="logo"></div>
    </div>
  );
}
