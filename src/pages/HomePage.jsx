import Trending from '../components/Trending';

// import NavigationBar from '../components/Navigation';
// import SearchForm from '../components/Search';
// import Media from '../components/Media';
// import Loading from '../components/Loading';

import { useState } from 'react';

import { useMovies } from '../contexts/MoviesContext';

const HomePage = function () {
  const { data, toggleBookmark } = useMovies();

  const title = 'Recommended for you';
  const trending = data.filter((movie) => movie.isTrending);
  const movies = data.filter((movie) => !movie.isTrending);

  const [hide, setHide] = useState(false);
  let componentsLoaded = 0;

  const imgsLoaded = () => {
    componentsLoaded++;
    if (componentsLoaded === 2) setHide(true);
  };

  return (
    <main>
      {/* <Loading hide={hide} /> */}
      {/* <NavigationBar /> */}
      {/* <SearchForm /> */}
      <Trending finish={imgsLoaded} />
      {/* <Media movies={movies} title={title} imgsLoaded={imgsLoaded} /> */}
    </main>
  );
};

export default HomePage;
