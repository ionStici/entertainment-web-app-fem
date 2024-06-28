import { useRouter } from "./contexts/RouterContext";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import BookmarksPage from "./pages/BookmarksPage";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";
import AuthPage from "./pages/AuthPage";

function App() {
  const { page } = useRouter();

  if (page === "home") return <HomePage />;
  if (page === "movies") return <MoviesPage />;
  if (page === "series") return <SeriesPage />;
  if (page === "bookmarks") return <BookmarksPage />;
  if (page === "search") return <SearchPage />;
  if (page === "login" || page === "signup") return <AuthPage />;
  if (page === "error") return <ErrorPage />;
  return null;
}

export default App;
