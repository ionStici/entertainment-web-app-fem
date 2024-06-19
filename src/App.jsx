import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import TvSeriesPage from './pages/TvSeriesPage';
import BookmarksPage from './pages/BookmarksPage';
import SearchPage from './pages/SearchPage';
import ErrorPage from './pages/ErrorPage';
import './styles/base.scss';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/movies',
    element: <MoviesPage />,
  },
  {
    path: '/tvseries',
    element: <TvSeriesPage />,
  },
  {
    path: '/bookmarks',
    element: <BookmarksPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
]);

function App() {
  return <HomePage />;
  // return <RouterProvider router={router} />;
}

export default App;
