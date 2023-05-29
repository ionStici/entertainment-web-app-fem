import './styles/base.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import TvSeriesPage from './pages/TvSeriesPage';
import BookmarksPage from './pages/BookmarksPage';
import ProfilePage from './pages/ProfilePage';
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
        element: <ProfilePage />,
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
