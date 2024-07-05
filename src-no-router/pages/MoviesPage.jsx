import Layout from "../components/Layout";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import Media from "../components/Media";
import { useState, useRef } from "react";
import { useUser } from "../contexts/UserContext";

const MoviesPage = function () {
  const { data } = useUser();
  const movies = data.filter((movie) => movie.category === "Movie");

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
      <Media movies={movies} loading={loading} title="Movies" />
    </Layout>
  );
};

export default MoviesPage;
