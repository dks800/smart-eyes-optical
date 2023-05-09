import GeneralComponent from "../General/GeneralComponent";
import anatomy from "../../img/sunglasses/sunglasses-anatomy.jpg";
import video1 from "../../img/sunglasses/video1.mp4";
import { sunglasses } from "../utilities";

import "./sunglasses.css";

const Sunglasses = () => {
  return (
    <GeneralComponent>
      <div className="sunglasses container">
        <h1>Sun Glasses</h1>
        <div className="content">
          <video autoPlay={true} loop controls height={500} muted={true}>
            <source src={video1} type="video/mp4" />
          </video>
          <img src={anatomy} className="anatomy" alt="Sun Glasses Anatomy" />
          <div className="sunglass-list left-aligned">
            {sunglasses?.map((glass, index) => {
              return (
                <img key={index} src={glass} alt="Sunglasses" height={350} />
              );
            })}
          </div>
        </div>
      </div>
    </GeneralComponent>
  );
};

export default Sunglasses;
