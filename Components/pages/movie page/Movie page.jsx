import Row from "./Rows";
import Requests from "./Requests";
import Banner from "../banner/Banner";
import NavBar from "../nav/NavBar";
const Moviepage = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Row
        isLargeRow={true}
        title="NetflixOriginals"
        fetchUrl={Requests.fetchNetflixOriginals}
      />
      <Row title="Trending" fetchUrl={Requests.fetchTrending} />
      <Row title="TopRated movie" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action movie" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comdy movie" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror movie" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
};
export default Moviepage;
