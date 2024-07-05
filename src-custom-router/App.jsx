import RouterProvider, { paths } from "./Router";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import BookmarksPage from "./pages/BookmarksPage";
import SearchPage from "./pages/SearchPage";
import AuthPage from "./pages/AuthPage";
import ErrorPage from "./pages/ErrorPage";

const router = [
  { path: paths.home, render: HomePage },
  { path: paths.movies, render: MoviesPage },
  { path: paths.series, render: SeriesPage },
  { path: paths.bookmarks, render: BookmarksPage },
  { path: paths.search, render: SearchPage },
  { path: paths.login, render: AuthPage },
  { path: paths.signup, render: AuthPage },
  { path: "*", render: ErrorPage },
];

function App() {
  return <RouterProvider router={router} />;
}

export default App;
