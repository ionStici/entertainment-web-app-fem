import Layout from "../components/Layout";
import Trending from "../components/Trending";
import Media from "../components/Media";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import { useRef, useState } from "react";
import { useUser } from "../contexts/UserContext";

const HomePage = function () {
  const { data } = useUser();

  const trending = data.filter((movie) => movie.isTrending);
  const movies = data.filter((movie) => !movie.isTrending);

  const [hide, setHide] = useState(false);
  let { current: componentsLoaded } = useRef(0);

  const loading = () => {
    componentsLoaded++;
    if (componentsLoaded === 2) setHide(true);
  };

  return (
    <Layout>
      <Loading hide={hide} />
      <SearchBar />
      <Trending trending={trending} loading={loading} />
      <Media movies={movies} loading={loading} title="Recommended for you" />
    </Layout>
  );
};

export default HomePage;
