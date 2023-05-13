import React from "react";
import "./navigation.css";
import logo from "./../../img/logo.JPG";

import { Link } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";

export default function Navigation() {
  return (
    <div className="navigation">
      <Link to="/">
        <img src={logo} alt="Logo" height="50" loading="lazy" />{" "}
      </Link>
      <NavigationLinks />
    </div>
  );
}
