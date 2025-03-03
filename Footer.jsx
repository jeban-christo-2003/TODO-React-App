import React from "react";
import "./Footer.css"; 

const Footer = ({ len, len1 }) => {
  return (
    <div className="footer-container">
      <h1>You have completed {len} tasks for today</h1>
      {len1 > 0 ? (
        <h2>You have {len1} tasks remaining</h2>
      ) : (
        <h2 className="footer-empty">The list is empty</h2>
      )}
    </div>
  );
};

export default Footer;
