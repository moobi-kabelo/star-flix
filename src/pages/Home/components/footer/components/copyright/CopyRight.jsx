import React from "react";
import { Link } from "react-router-dom";
import "./CopyRight.css"

const CopyRight = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <p className="copyright">
          &copy; 2023 Star Flix .All Rights Reserved. Made By{" "}
          <Link to="https://github.com/b3lf3g0r">Moobi Kabelo</Link>.
        </p>

        <img src="." alt="" className="footer-bottom-img" />
      </div>
    </div>
  );
};

export default CopyRight;
