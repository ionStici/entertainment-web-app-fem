import Layout from "../components/Layout";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import Media from "../components/Media";
import { useState, useRef } from "react";
import { useMovies } from "../contexts/MoviesContext";

const SeriesPage = function () {
  const { data } = useMovies();
  const movies = data.filter((movie) => movie.category === "TV Series");

  const [hide, setHide] = useState(false);
  let { current: componentsLoaded } = useRef(0);

  const loading = () => {
    componentsLoaded++;
    if (componentsLoaded === 1) setHide(true);
  };

  return (
    <Layout>
      <Loading hide={hide} />
      <SearchBar />
      <Media movies={movies} loading={loading} title="TV Series" />
    </Layout>
  );
};

export default SeriesPage;
