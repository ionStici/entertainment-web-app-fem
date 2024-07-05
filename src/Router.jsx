import { createContext, useContext, useState } from "react";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import BookmarksPage from "./pages/BookmarksPage";
import SearchPage from "./pages/SearchPage";
import AuthPage from "./pages/AuthPage";

const router = [
  { path: "home", Component: <HomePage /> },
  { path: "movies", Component: <MoviesPage /> },
  { path: "series", Component: <SeriesPage /> },
  { path: "bookmarks", Component: <BookmarksPage /> },
  { path: "search", Component: <SearchPage /> },
  { path: "login", Component: <AuthPage /> },
  { path: "signup", Component: <AuthPage /> },
];

const RouterContext = createContext();

export default function RouterProvider({ children }) {
  const [page, setPage] = useState("home");

  const goHome = () => setPage("home");
  const goMovies = () => setPage("movies");
  const goSeries = () => setPage("series");
  const goBookmarks = () => setPage("bookmarks");
  const goSearch = () => setPage("search");
  const goLogin = () => setPage("login");
  const goSignup = () => setPage("signup");
  const goTo = (to) => setPage(to);

  return (
    <RouterContext.Provider value={{ router, page, goTo, goHome, goMovies, goSeries, goBookmarks, goSearch, goLogin, goSignup }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) throw new Error("Router Context Error");
  return context;
}
