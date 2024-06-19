import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import Media from "../components/Media";
import { useMovies } from "../contexts/MoviesContext";
import { useState } from "react";

const SearchPage = function () {
  const { data } = useMovies();

  const [title, setTitle] = useState("Type into the search bar for a quick lookup ;)");
  const [movies, setMovies] = useState([]);

  const handleSearch = function ({ target }) {
    const query = target.value.toLowerCase();

    const newMovies = data.filter((movie) => {
      if (query === "") return false;
      return movie.title.toLowerCase().includes(query);
    });

    setTitle(`Found ${newMovies.length} results ${newMovies[0] ? `for '${target.value}'` : ""}`);
    setMovies(newMovies);
  };

  return (
    <Layout>
      <SearchBar focus={true} handleSearch={handleSearch} />
      {movies && <Media movies={movies} loading={() => ""} title={title} />}
    </Layout>
  );
};

export default SearchPage;
