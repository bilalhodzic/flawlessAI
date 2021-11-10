import React from "react";
import classNames from "classnames";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#team">About us</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
