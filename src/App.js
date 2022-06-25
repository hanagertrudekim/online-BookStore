import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import WishLIst from "./WishLIst";

const MOVIE_API = process.env.REACT_APP_MOVIE_API;

function App() {
  const [movies, setMovies] = useState([]);
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    axios.get(MOVIE_API).then(({ data }) => {
      setMovies(data.data.movies);
      console.log(data.data.movies);
      setCartList(JSON.parse(localStorage.getItem("wishlist")));
    });
  }, []);
  const addCart = (index) => {
    let stopFlag = false;
    const selectMovie = movies[index];
    cartList.forEach((a) => {
      if (a === selectMovie) {
        stopFlag = true;
      }
    });
    if (!stopFlag) cartList.push(selectMovie);
    setCartList(cartList.slice());
    localStorage.setItem("wishlist", JSON.stringify(cartList));
  };
  const removeCart = (index) => {
    cartList.splice(index, 1);
    setCartList(cartList.slice());
    localStorage.setItem("wishlist", JSON.stringify(cartList));
  };
  return (
    <div className="App">
      <div className="top">
        <MovieList movies={movies} addCart={addCart} />
        <WishLIst cartList={cartList} removeCart={removeCart} />
      </div>
      <div className="bottom">
        <div className="pagenation"></div>
      </div>
    </div>
  );
}

export default App;
