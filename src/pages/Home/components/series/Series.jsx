import React from "react";
import { Link } from "react-router-dom";

const Series = ({ image, title, duration, genre, rating }) => {
  return (
    <li>
      <div className="movie-card">
        <Link to="#">
          <figure className="card-banner">
            <img src={image} alt={title} />
          </figure>
        </Link>

        <div className="title-wrapper">
          <Link to="#">
            <h3 className="card-title">{title}</h3>
          </Link>

          <time>{duration}</time>
        </div>

        <div className="card-meta">
          {genre.map((genreItem, index) => (
            <div key={index} className="badge badge-outline">
              {genreItem}
            </div>
          ))}

          <div className="duration">
            <ion-icon name="time-outline"></ion-icon>
            <time>{duration}</time>
          </div>

          <div className="rating">
            <ion-icon name="star"></ion-icon>
            <data>{rating}</data>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Series;
