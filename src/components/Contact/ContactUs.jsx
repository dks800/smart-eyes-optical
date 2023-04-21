import { useState } from "react";
import { emailPattern } from "../utilities";
import "./contact.css";

function ContactUs() {
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    description: false,
  });
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = () => {
    const result = validateErrors();
    if (!result) return false;
    alert("Submitted!"); //TODO: Send data to mail
    // resetData();
  };
  const resetData = () => {
    setFullname("");
    setEmail("");
    setDescription("");
    setErrors({ name: false, email: false, description: false });
  };

  const updateData = (input, value) => {
    switch (input) {
      case "name":
        setFullname(value);
        setErrors({ ...errors, name: false });
        return;
      case "email":
        setEmail(value);
        setErrors({ ...errors, email: false });
        return;
      case "description":
        setDescription(value);
        setErrors({ ...errors, description: false });
        return;
      default:
        return false;
    }
  };

  const validateErrors = () => {
    let err = false;
    if (!fullname || fullname.length < 1) {
      setErrors({ ...errors, name: true });
      err = true;
    }
    if (!email || email.length < 1) {
      setErrors({ ...errors, email: true });
      err = true;
    }
    if (!emailPattern.test(email)) {
      setErrors({ ...errors, email: true });
      err = true;
    }
    if (!description || description.length < 1) {
      setErrors({ ...errors, description: true });
      err = true;
    }
    return !err;
  };

  return (
    <div className="contactus">
      <h1>Contact Us</h1>
      <div className="container">
        <div className="map">
          <h4>Locate Us</h4>
          <iframe
            title="Smart Eyes Optical"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.2372238887847!2d32.45373046057435!3d-25.960259210902205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee685d512d2babd%3A0xa8969e46c60cb569!2sSmart%20Eyes%20Optical%2C%20Lda!5e0!3m2!1sen!2sin!4v1682061054549!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form">
          <h4>Contact Us</h4>
          <div className="fields">
            <input
              className={errors.name ? "error" : ""}
              type="text"
              name="name"
              placeholder="Full Name"
              value={fullname}
              onInput={(e) => updateData("name", e.target.value)}
            />
            <input
              className={errors.email ? "error" : ""}
              type="email"
              name="email"
              placeholder="Enter email id"
              value={email}
              onInput={(e) => updateData("email", e.target.value)}
            />
            <textarea
              className={errors.description ? "error" : ""}
              onInput={(e) => updateData("description", e.target.value)}
              value={description}
              name="description"
              cols="10"
              rows="10"
              placeholder="Enter description"
            ></textarea>
          </div>
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
