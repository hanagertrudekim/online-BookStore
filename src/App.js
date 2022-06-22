import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

const MOVIE_API = process.env.REACT_APP_MOVIE_API;

function App() {
  const [movies, setMovies] = useState([]);
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    axios.get(MOVIE_API).then(({ data }) => {
      setMovies(data.data.movies);
      console.log(data.data.movies);
    });
  }, []);
  const addCart = (index) => {
    const selectMovie = movies[index];
    cartList.push(selectMovie);
    setCartList(cartList.slice());
  };
  return (
    <div className="App">
      <div className="top">
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
        <div className="cart">
          {cartList.map((select, index) => {
            return (
              <img
                key={index}
                src={select.small_cover_image}
                alt="cover_image"
              />
            );
          })}
        </div>
      </div>
      <div className="bottom">
        <div className="pagenation"></div>
      </div>
    </div>
  );
}

export default App;
