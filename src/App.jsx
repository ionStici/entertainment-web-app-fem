import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import BookmarksPage from "./pages/BookmarksPage";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";
import AuthPage from "./pages/AuthPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/movies", element: <MoviesPage /> },
  { path: "/series", element: <SeriesPage /> },
  { path: "/bookmarks", element: <BookmarksPage /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/login", element: <AuthPage /> },
  { path: "/signup", element: <AuthPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
