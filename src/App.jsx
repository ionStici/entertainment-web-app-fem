import './styles/base.scss';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
// import MoviesPage from './pages/MoviesPage';
// import SeriesPage from './pages/TvSeriesPage';
// import BookmarksPage from './pages/BookmarksPage';

// import SearchPage from './pages/SearchPage';
// import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

const icons = {
  logo: 'assets/logo.svg',
  iconBookmarkEmpty: 'assets/icon-bookmark-empty.svg',
  iconBookmarkFull: 'assets/icon-bookmark-full.svg',

  iconCategoryMovie: 'assets/icon-category-movie.svg',
  iconCategoryTv: 'assets/icon-category-tv.svg',

  iconHome: 'assets/icon-nav-home.svg',
  iconMovies: 'assets/icon-nav-movies.svg',
  iconSeries: 'assets/icon-nav-tv-series.svg',
  iconBookmark: 'assets/icon-nav-bookmark.svg',

  iconPlay: 'assets/icon-play.svg',
  iconSearch: 'assets/icon-search.svg',
};

const imageAvatar = 'assets/image-avatar.png';
