import React from "react";
import optom from "../../img/optom.jpg";
import "./optometrist.css";

function Optometrist() {
  return (
    <div className="optom container">
      <h1>Owner</h1>
      <div>
        <img src={optom} alt="Optometrist" />
        <h2>Gyan Paliwal</h2>
        <h3>Optometrist & Contact Lens Specialist</h3>
      </div>
      <div className="content">
        <p>
          <strong>Gyan Paliwal </strong>
          is a healthcare professional who specializes in diagnosing and
          treating vision problems and contact lenses. He performs eye exams,
          prescribe corrective lenses, and provide other types of vision care.
          He is experienced in detecting and managing a wide range of eye
          conditions, including refractive errors (e.g. nearsightedness,
          farsightedness, astigmatism), binocular vision disorders, and ocular
          diseases (e.g. glaucoma, cataracts).
        </p>
        <p>
          He also works closely with ophthalmologists, who are medical doctors
          specializing in eye care and surgery, to manage more complex eye
          conditions.
        </p>
      </div>
    </div>
  );
}

export default Optometrist;
