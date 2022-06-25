import React from "react";

export default function MovieList({ movies, addCart }) {
  return (
    <div className="cards">
      {movies.map((movie, index) => {
        return (
          <div className="card" key={movie.id}>
            <h3 className="card-title">{movie.title}</h3>
            <span onClick={() => addCart(index)} className="cart-button">
              +
            </span>
            <img src={movie.medium_cover_image} alt="cover_image" />
          </div>
        );
      })}
    </div>
  );
}
