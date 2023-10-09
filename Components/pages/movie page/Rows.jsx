import { useEffect, useState } from "react";
import server from "../Axio";
import "./Movie page.css";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  const baseurl = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const fetchData = async () => {
      const response = await server.get(fetchUrl);
      setMovie(response.data.results);
      return response;
    };
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="movie-container">
      <h2>{title}</h2>
      <div className="rows">
        {movies.map((movie) => (
          <img
            className={`row-poster ${isLargeRow && "row-posterlarge"}`}
            key={movie.id}
            src={`${baseurl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie}
          />
        ))}
      </div>
    </div>
  );
};
export default Row;
