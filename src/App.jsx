import './styles/base.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Home';
import MoviesPage from './pages/Movies';
import TvSeriesPage from './pages/TvSeriesPage';
import BookmarksPage from './pages/Bookmarks';
import ErrorPage from './pages/ErrorPage';

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
        path: '/profile',
        element: <HomePage />,
    },
    {
        path: '/profile/:user',
        element: <HomePage />,
    },
]);

function App() {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
}

export default App;
