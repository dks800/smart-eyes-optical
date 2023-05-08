import React from "react";
import "./navigation.css";
import logo from "./../../img/logo.JPG";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <Link to="/">
        <img src={logo} alt="Logo" height="50" loading="lazy" />{" "}
      </Link>
      <div>
        <Link to="/eyewear">EYEGLASSES</Link>
      </div>
      <div>
        <Link to="/eyewear">SUNGLASSES</Link>
      </div>
      <div>
        <Link to="/contact-lens">CONTACT LENSES</Link>
      </div>
      <div>
        <Link to="/brands">BRANDS</Link>
      </div>
      <div>
        <Link to="/exam">EYE EXAM</Link>
      </div>
      <aside className="language">
        <select>
          <option>English</option>
          <option>Portugese</option>
        </select>
      </aside>
    </div>
  );
}
