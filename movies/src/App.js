import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=35a3a926';

const sampleObject = {
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm]=useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);

    // This can be done in this way 
    // const response=await axios.get(`${API_URL}&s=${title}`);
    // const data=await response.data;
    // console.log(data.Search);
  }
  useEffect(() => {
    searchMovies("");
  }, []);
  // console.log("Movies array after api call");
  // console.log(movies);
  return (
    <div className="app">
      <h1>MoviesLand</h1>

      <div className='search'>
        <input
          type='text'
          placeholder='Search for Movies'
          value={searchTerm}
          onChange={(event)=>{
            let term=event.target.value;
            setSearchTerm(term);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
      {/* <div className='container'>
        <MovieCard sampleObject={sampleObject}/>
      </div> */}
      {
        movies?.length > 0
          ? (
            <div className='container'>
              {/* <MovieCard sampleObject={sampleObject} /> */}
              {/* {console.log(movies)} */}
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          )
          : (
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;
