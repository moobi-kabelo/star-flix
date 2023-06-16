import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Star Flix</p>

          <h1 className="h1 hero-title">
            Unlimited <strong>Movie</strong>, TVs Shows, & More.
          </h1>

          <div className="meta-wrapper">
            <div className="badge-wrapper">
              <div className="badge badge-fill">PG 18</div>

              <div className="badge badge-outline">HD</div>
            </div>

            <div className="ganre-wrapper">
              <Link to="#">Romance,</Link>
              <Link to="#">Drama</Link>
            </div>

            <div className="date-time">
              <div>
                <ion-icon name="calendar-outline"></ion-icon>

                <time datetime="2022">2022</time>
              </div>

              <div>
                <ion-icon name="time-outline"></ion-icon>

                <time datetime="PT128M">128 min</time>
              </div>
            </div>
          </div>

          <Button className="btn btn-primary">
            <ion-icon name="play"></ion-icon>
            <span>Watch now</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
