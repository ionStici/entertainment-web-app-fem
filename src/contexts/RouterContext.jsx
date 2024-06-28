import { createContext, useContext, useEffect, useState } from "react";

const RouterContext = createContext();

const pages = ["", "home", "movies", "series", "bookmarks", "search", "login", "signup"];

export default function RouterProvider({ children }) {
  const [page, setPage] = useState("home");

  const path = window.location.pathname.slice(1);
  const isError404 = !pages.includes(path);

  useEffect(() => {
    if (isError404) setPage("error");
  }, [isError404]);

  const goHome = () => setPage("home");
  const goMovies = () => setPage("movies");
  const goSeries = () => setPage("series");
  const goBookmarks = () => setPage("bookmarks");
  const goSearch = () => setPage("search");
  const goLogin = () => setPage("login");
  const goSignup = () => setPage("signup");
  const goTo = (to) => setPage(to);

  return (
    <RouterContext.Provider value={{ page, goTo, goHome, goMovies, goSeries, goBookmarks, goSearch, goLogin, goSignup }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) throw new Error("Router Context Error");
  return context;
}
