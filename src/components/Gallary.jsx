import { gallaryImages } from "./utilities";
import { Carousel } from "react-responsive-carousel";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.css";

function Gallary() {
  return (
    <div className="gallary.container">
      <h1>Gallary</h1>
      <Carousel showArrows={true}>
        {gallaryImages.map((img, idx) => {
          return (
            <div key={idx}>
              <img src={img} alt="Gallery" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Gallary;
