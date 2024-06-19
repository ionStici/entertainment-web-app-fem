import NavigationBar from '../components/Navigation';
import SearchForm from '../components/Search';
import Movies from '../components/Media';
import Loading from '../components/Loading';
import React from 'react';
import { useMovies } from '../contexts/MoviesContext';

const MoviesPage = function () {
  const { data } = useMovies();

  const title = 'Movies';
  const movies = data.filter((movie) => movie.category === 'Movie');

  const [hide, setHide] = React.useState(false);
  let componentsLoaded = 0;

  const imgsLoaded = () => {
    componentsLoaded++;
    if (componentsLoaded === 1) setHide(true);
  };

  return (
    <main>
      <Loading hide={hide} />
      <NavigationBar />
      <SearchForm />
      <Movies movies={movies} title={title} imgsLoaded={imgsLoaded} />
    </main>
  );
};

export default MoviesPage;
