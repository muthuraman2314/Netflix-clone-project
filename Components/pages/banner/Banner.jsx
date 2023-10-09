import Requests from "../movie page/Requests";
import { useEffect, useState } from "react";
import server from "../Axio";
import "./Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const request = await server.get(Requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
      } catch (error) {
        console.log("Error fetching data:", error);
      }
      // return request;
    };
    fetchdata();
    const key = setInterval(() => fetchdata(), 10000);
    return () => {
      clearInterval(key);
    };
  }, []);
  const handle = (data, n) => {
    return data?.length > n ? data.substring(0, n) + "..." : data;
  };
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: " center center ",
        width: "100%",
      }}
    >
      <div className="banner-container">
        <h1 className="title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My list</button>
        </div>
        <h5 className="descripation">{handle(movie?.overview, 200)}</h5>
      </div>
      <div className="fade-bottom"></div>
    </header>
  );
};
export default Banner;
