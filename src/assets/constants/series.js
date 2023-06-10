import { TheBlackList } from "../images/series/t-b-l.jpg";
import { Got } from "../images/series/got.jpg";
import { Pablo } from "../images/series/pablo.jpg";
import { FearWalkingDead } from "../images/series/f-t-w-d.jpg";

const SeriesData = [
  {
    image: TheBlackList,
    title: "The Blacklist",
    genre: ["Drama", "Crime", "Mystery"],
    rating: 7,
  },
  {
    image: Got,
    title: "Game Of Thrones",
    genre: ["Sci-Fi", "Action", "Adventure"],
    rating: 8,
  },
  {
    image: Pablo,
    title: "Pablo Escobar: THe Drug Lord",
    genre: ["Crime", "Drama"],
    rating: 7,
  },
  {
    image: FearWalkingDead,
    title: "Fear Walking Dead",
    genre: ["Action", "Adventure"],
    rating: 7,
  },
];

export default SeriesData;
// import React from 'react';
// import logo from './logo.png'; // Tell webpack this JS file uses this image

// console.log(logo); // /logo.84287d09.png

// function Header() {
//   // Import result is the URL of your image
//   return <img src={logo} alt="Logo" />;
// }

// export default Header;
