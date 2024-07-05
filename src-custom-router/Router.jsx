import { createContext, useContext, useState, useEffect, useCallback } from "react";

const repoName = "/entertainment-web-app-fem";

export const paths = {
  home: repoName + "/",
  movies: repoName + "/movies",
  series: repoName + "/series",
  bookmarks: repoName + "/bookmarks",
  search: repoName + "/search",
  login: repoName + "/login",
  signup: repoName + "/signup",
};

const RouterContext = createContext();

export default function RouterProvider({ router = [], Layout = ({ children }) => <>{children}</> }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = useCallback((to) => {
    window.history.pushState({}, "", to);
    const locationChange = new PopStateEvent("navigate");
    window.dispatchEvent(locationChange);
    setCurrentPath(to);
  }, []);

  useEffect(() => {
    const handleNavigate = () => setCurrentPath(window.location.pathname);

    window.addEventListener("popstate", handleNavigate);
    window.addEventListener("navigate", handleNavigate);

    return () => {
      window.removeEventListener("popstate", handleNavigate);
      window.removeEventListener("navigate", handleNavigate);
    };
  }, []);

  const is404 = !router.some(({ path }) => currentPath === path);

  const goHome = () => navigate(paths.home);
  const goSearch = () => navigate(paths.search);
  const goLogin = () => navigate(paths.login);
  const goSignup = () => navigate(paths.signup);

  return (
    <RouterContext.Provider value={{ currentPath, paths, navigate, goHome, goSearch, goLogin, goSignup }}>
      <Layout>
        {router.map(({ path, render: Component }, i) => {
          return currentPath === path ? <Component key={i} /> : null;
        })}
        {is404 && router.find(({ path }) => path === "*")?.render()}
      </Layout>
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) throw new Error("useRouter must be used within RouterProvider");
  return context;
}

export function Link({ children, to, className }) {
  const { navigate } = useRouter();

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      navigate(to);
    },
    [navigate, to]
  );

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
