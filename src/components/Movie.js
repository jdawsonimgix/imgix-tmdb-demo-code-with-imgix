import React from "react";
import Imgix from "react-imgix";
import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "lazysizes/plugins/attrchange/ls.attrchange";

//const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className='movie'>
    {/* <img
      src={
        poster_path
          ? IMG_API + poster_path
          : "https://images.unsplash.com/photo-1538152911114-73f1aa6d6128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
      }
      alt={title}
    ></img> */}

    {/* <Imgix
      src={
        "https://imgix-tmdb-demo-source.imgix.net/image.tmdb.org/t/p/w1280" +
        poster_path
      }
      imgixParams={{ auto: "compress,format" }}
    /> */}

    <Imgix
      className='lazyload'
      src={
        "https://imgix-tmdb-demo-source.imgix.net/image.tmdb.org/t/p/w1280" +
        poster_path
      }
      sizes='auto'
      attributeConfig={{
        src: "data-src",
        srcSet: "data-srcset",
        sizes: "data-sizes",
      }}
      htmlAttributes={{
        src:
          "https://imgix-tmdb-demo-source.imgix.net/image.tmdb.org/t/p/w1280" +
          poster_path +
          "?w=10&auto=format,compress",
      }}
    />

    <div className='movie-info'>
      <h3>{title}</h3>
      <span className={`tag ${setVoteClass(vote_average)}`}>
        {vote_average}
      </span>
    </div>
    <div className='movie-over'>
      <h2>Overview:</h2>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movie;
