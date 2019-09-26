import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="Navbar bg-primary" style={{ height: "50px" }}>
      <h1>
        <i className={icon} style={{ padding: "13px 10px 10px 30px" }} />
        {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "GitHub Finder",
  icon: "fab fa-github"
};

Navbar.propsTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
