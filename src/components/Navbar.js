import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <header>
        <h2 className="logo">{props.title}</h2>
        <nav className="navigation">
          <link to="/">Home</link>
          <link to="/About">About</link>
          <link to="/Contact">Contact Us</link>
        </nav>
      </header>
    </div>
  );
}

// //For throwing error if not entered the title
// Navbar.propTypes = {
//   title: PropTypes.string.isRequired
// }
// //For setting default values
// Navbar.defaultProps = {
//     title: 'enter the name'
// }
