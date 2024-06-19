import moviesStyles from "./../styles/Media.module.scss";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import Media from "../components/Media";
import { useEffect, useState, useRef } from "react";
import { useMovies } from "../contexts/MoviesContext";

const BookmarksPage = function () {
  const { data } = useMovies();

  const moviesTitle = "Bookmarked Movies";
  const movies = data.filter((movie) => movie.isBookmarked && movie.category === "Movie");

  const tvSerTitle = "Bookmaked TV Series";
  const tvSeries = data.filter((movie) => movie.isBookmarked && movie.category === "TV Series");

  const [hide, setHide] = useState(false);
  let { current: componentsLoaded } = useRef(0);

  if (!movies[0]) componentsLoaded++;
  if (!tvSeries[0]) componentsLoaded++;

  useEffect(() => {
    if (!movies[0] && !tvSeries[0]) setHide(true);
  }, []);

  const loading = () => {
    componentsLoaded++;
    if (componentsLoaded >= 2) setHide(true);
  };

  return (
    <Layout>
      <Loading hide={hide} />
      <SearchBar />
      {movies[0] && <Media movies={movies} loading={loading} title={moviesTitle} />}
      {tvSeries[0] && <div className={moviesStyles.spaceBetweenBlocks}></div>}
      {tvSeries[0] && <Media movies={tvSeries} loading={loading} title={tvSerTitle} />}
    </Layout>
  );
};

export default BookmarksPage;
