import { SpitOnYourGravr } from "../images/movies/i-spit-on-your-grave.jpg";
import { JohnWick } from "../images/movies/john-wick.jpg";
import { Transfomers } from "../images/movies/transfomers.jpg";
import { EvilDeadRise } from "../images/movies/evil-dead-rise.jpg";

const MovieData = [
  {
    image: SpitOnYourGravr,
    title: "I Spit On Your Grave 3",
    duration: "1h31m",
    genre: ["Horror", "Thriller"],
    rating: 5,
  },
  {
    image: JohnWick,
    title: "John Wick",
    duration: "2h50m",
    genre: ["Action", "Thriller", "Crime"],
    rating: 7,
  },
  {
    image: Transfomers,
    title: "Transfomers 7",
    duration: "2h7m",
    genre: ["Action", "Adventure", "Science Fiction"],
    rating: 7,
  },
  {
    image: EvilDeadRise,
    title: "Evil Dead Walking",
    duration: "1h36m",
    genre: ["Thriller", "Horror"],
    rating: 7,
  },
];

export default MovieData;
// import React from 'react';
// import logo from './logo.png'; // Tell webpack this JS file uses this image

// console.log(logo); // /logo.84287d09.png

// function Header() {
//   // Import result is the URL of your image
//   return <img src={logo} alt="Logo" />;
// }

// export default Header;
