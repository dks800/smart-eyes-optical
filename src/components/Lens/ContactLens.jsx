import GeneralComponent from "../General/GeneralComponent";
import { lensTypes } from "../utilities";
import lens from "../../img/contact-lens/lens3.jpg";
import "./lens.css";

const ContactLens = () => {
  return (
    <>
      <GeneralComponent>
        <div className="contact-lens container">
          <h1>Contact Lens</h1>
          <div className="content">
            <div className="lens"></div>
            {lensTypes?.map((lens, index) => {
              return (
                <div className="lens-type" key={index}>
                  <img src={lens.url} alt="Lens" />
                  <div>
                    <h3>{lens.name}</h3>
                    <h5>{lens.description}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </GeneralComponent>
    </>
  );
};

export default ContactLens;
