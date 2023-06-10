import React from "react";
import SeriesData from "./hooks/series/SeriesData";
import Series from "./Series";

const SeriesList = () => {
  return (
    <ul class="movies-list  has-scrollbar">
      {SeriesData.map((series, index) => (
        <Series
          key={index}
          image={series.image}
          title={series.title}
          genre={series.genre}
          rating={series.rating}
        />
      ))}
    </ul>
  );
};

export default SeriesList;
