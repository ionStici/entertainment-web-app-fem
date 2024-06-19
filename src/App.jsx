import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/base.scss";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movies",
    element: <MoviesPage />,
  },
  {
    path: "/series",
    element: <SeriesPage />,
  },
  {
    path: "/bookmarks",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
