import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import Media from "../components/Media";
import { useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";

const SearchPage = function () {
  const { data } = useUser();
  const [query, setQuery] = useState("");

  const [title, setTitle] = useState("Type into the search bar for a quick lookup ;)");
  const [movies, setMovies] = useState([]);

  const handleSearch = function () {
    const filteredMovies = data.filter((movie) => {
      if (query === "") return false;
      return movie.title.toLowerCase().includes(query.toLowerCase());
    });

    setTitle(`Found ${filteredMovies.length} results ${filteredMovies[0] ? `for '${query}'` : ""}`);
    setMovies(filteredMovies);
  };

  useEffect(() => {
    handleSearch();
  }, [query, data]);

  return (
    <Layout>
      <SearchBar focus={true} query={query} setQuery={setQuery} />
      {movies && <Media movies={movies} loading={() => ""} title={title} />}
    </Layout>
  );
};

export default SearchPage;
