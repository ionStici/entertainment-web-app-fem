import NavigationBar from "../components/Navigation";
import SearchForm from "../components/Search";
import Movies from "../components/Media";
import React from "react";
import { useMovies } from "../contexts/MoviesContext";

const SearchPage = function () {
  const { data } = useMovies();

  const [title, setTitle] = React.useState();
  const [media, setMedia] = React.useState("");

  const handleSearch = function ({ target }) {
    const query = target.value.toLowerCase();

    const newMedia = data.filter((movie) => {
      if (query === "") return false;
      return movie.title.toLowerCase().includes(query);
    });

    setTitle(`Found ${newMedia.length} results ${newMedia[0] ? `for '${target.value}'` : ""}`);
    setMedia(newMedia);
  };

  return (
    <main>
      <NavigationBar />
      <SearchForm focus={true} handleSearch={handleSearch} />
      {media && <Movies movies={media} title={title} imgsLoaded={() => ""} />}
    </main>
  );
};

export default SearchPage;
