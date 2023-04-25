import React from "react";
import "./navigation.css";
import logo from "./../../img/logo.JPG";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <img src={logo} alt="Logo" height="50" loading="lazy" />
      <div>EYEGLASSES</div>
      <div>SUNGLASSES</div>
      <div>CONTACT LENSES</div>
      <div>LENS</div>
      <div>BRANDS</div>
      <div>EYE EXAM</div>
      <aside className="language">
        <select>
          <option>English</option>
          <option>Portugese</option>
        </select>
      </aside>
    </div>
  );
}
