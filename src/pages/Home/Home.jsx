import React from "react";
import { Button } from "react-bootstrap";
import Hero from "./components/hero/Hero";
import Newsletter from "./components/newsletter/Newsletter";
import MovieList from "./components/movie/MovieList";
import SeriesList from "./components/series/SeriesList";

const Home = () => {
  return (
    <main className="main">
      <article>
        {/* Start => Hero */}
        <Hero />
        {/* End => Hero */}

        <section className="upcoming">
          <div className="container">
            <div className="flex-wrapper">
              <div className="title-wrapper">
                <p className="section-subtitle">Online Streaming</p>

                <h2 className="h2 section-title">Upcoming Movies</h2>
              </div>

              <ul className="filter-list">
                <li>
                  <Button className="filter-btn">Movies</Button>
                </li>
              </ul>
            </div>

            <ul className="movies-list  has-scrollbar">
              <MovieList />
            </ul>
          </div>
        </section>

{/*
        <section className="service">
          <div className="container">
            <div className="service-banner">
              <figure>
                <img
                  src="./assets/images/service-banner.jpg"
                  alt="HD 4k resolution! only $3.99"
                />
              </figure>

              <a
                href="./assets/images/service-banner.jpg"
                download
                className="service-btn"
              >
                <span>Download</span>

                <ion-icon name="download-outline"></ion-icon>
              </a>
            </div>

            <div className="service-content">
              <p className="service-subtitle">Our Services</p>

              <h2 className="h2 service-title">
                Download Your Shows Watch Offline.
              </h2>

              <p className="service-text">
                Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                eiusmod tempor.There are many variations of passages of lorem
                Ipsum available, but the majority have suffered alteration in
                some injected humour.
              </p>

              <ul className="service-list">
                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <ion-icon name="tv"></ion-icon>
                    </div>

                    <div className="card-content">
                      <h3 className="h3 card-title">Enjoy on Your TV.</h3>

                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <ion-icon name="videocam"></ion-icon>
                    </div>

                    <div className="card-content">
                      <h3 className="h3 card-title">Watch Everywhere.</h3>

                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        */}

        {/*
        <section className="top-rated">
          <div className="container">
            <p className="section-subtitle">Online Streaming</p>

            <h2 className="h2 section-title">Top Rated Movies</h2>

            <ul className="filter-list">
              <li>
                <Button className="filter-btn">Movies</Button>
              </li>
            </ul>

            <ul className="movies-list">
              <MovieList />
            </ul>
          </div>
        </section>
  */}

        <section className="tv-series">
          <div className="container">
            <p className="section-subtitle">Best TV Series</p>

            <h2 className="h2 section-title">World Best TV Series</h2>

            <ul className="movies-list">
              <SeriesList />
            </ul>
          </div>
        </section>

        <Newsletter />
      </article>
    </main>
  );
};

export default Home;
