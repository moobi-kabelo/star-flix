import React from "react";
import { Link } from "react-router-dom";
import CopyRight from "./components/copyright/CopyRight";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand-wrapper">
            <Link to="/" className="logo">
              <img src="./assets/images/logo.svg" alt="StarFlix logo" />
            </Link>

            <ul className="footer-list">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>

              <li>
                <Link to="#" className="footer-link">
                  Movies
                </Link>
              </li>

              <li>
                <Link to="#" className="footer-link">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Series
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="divider"></div>

          <div className="quicklink-wrapper">
            <ul className="quicklink-list">
              <li>
                <Link to="#" className="quicklink-link">
                  Faq
                </Link>
              </li>

              <li>
                <Link to="#" className="quicklink-link">
                  Help center
                </Link>
              </li>

              <li>
                <Link to="#" className="quicklink-link">
                  Terms of use
                </Link>
              </li>

              <li>
                <Link to="#" className="quicklink-link">
                  Privacy
                </Link>
              </li>
            </ul>

            <ul className="social-list">
              <li>
                <Link to="#" target="_blank" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </Link>
              </li>

              <li>
                <Link to="#" target="_blank" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </Link>
              </li>

              <li>
                <Link to="#" target="_blank" className="social-link">
                  <ion-icon name="logo-pinterest"></ion-icon>
                </Link>
              </li>

              <li>
                <Link to="#" target="_blank" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

     <CopyRight />
    </footer>
  );
};

export default Footer;
