import NavigationBar from '../components/Navigation';
import SearchForm from '../components/Search';
import Movies from '../components/Media';
import moviesStyles from './../styles/Movies.module.scss';
import React from 'react';
import Loading from '../components/Loading';
import { useMovies } from '../contexts/MoviesContext';

const BookmarksPage = function () {
  const { data } = useMovies();

  const [page, updatePage] = React.useState(0);
  const update = () => updatePage((prev) => prev + 1);

  const moviesTitle = 'Bookmarked Movies';

  const movies = data.filter((movie) => {
    return movie.isBookmarked && movie.category === 'Movie';
  });

  const tvSerTitle = 'Bookmaked TV Series';

  const tvSeries = data.filter((movie) => {
    return movie.isBookmarked && movie.category === 'TV Series';
  });

  // // // // // // // // // // // // // // // // // // // //

  const [hide, setHide] = React.useState(false);
  let componentsLoaded = 0;

  if (!movies[0]) componentsLoaded++;
  if (!tvSeries[0]) componentsLoaded++;

  React.useEffect(() => {
    if (!movies[0] && !tvSeries[0]) setHide(true);
  }, []);

  const imgsLoaded = () => {
    componentsLoaded++;
    if (componentsLoaded >= 2) setHide(true);
  };

  // // // // // // // // // // // // // // // // // // // //

  return (
    <main>
      <Loading hide={hide} />
      <NavigationBar />
      <SearchForm />
      {movies[0] ? (
        <Movies
          movies={movies}
          title={moviesTitle}
          update={update}
          imgsLoaded={imgsLoaded}
        />
      ) : (
        ''
      )}
      {tvSeries[0] ? (
        <div className={moviesStyles.spaceBetweenBlocks}></div>
      ) : (
        ''
      )}
      {tvSeries[0] ? (
        <Movies
          movies={tvSeries}
          title={tvSerTitle}
          update={update}
          imgsLoaded={imgsLoaded}
        />
      ) : (
        ''
      )}
    </main>
  );
};

export default BookmarksPage;
