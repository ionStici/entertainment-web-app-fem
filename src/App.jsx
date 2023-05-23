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

// // // // // // // // // // // // // // // // // // // //

// import navStyles from './styles/NavigationBar.module.scss';
// function App() {
//     const [content, setContent] = React.useState(
//         data.filter(movie => !movie.isTrending)
//     );

//     const [trending, setTrending] = React.useState(
//         data.filter(movie => movie.isTrending)
//     );

//     const [query, setQuery] = React.useState('');
//     const [title, setTitle] = React.useState('Recommended for you');

//     const handleClick = function ({ target }) {
//         const wrapper = target.closest(`.${navStyles.btns_wrapper}`);
//         const btns = [...wrapper.querySelectorAll('button')];
//         btns.forEach(btn => btn.classList.remove(navStyles.active));

//         if (target.dataset.type === 'home') {
//             btns[0].classList.add(navStyles.active);
//             setContent(data.filter(movie => !movie.isTrending));
//             setTrending(data.filter(movie => movie.isTrending));
//             setTitle('Recommended for you');
//         }

//         if (target.dataset.type === 'movies') {
//             btns[1].classList.add(navStyles.active);
//             setContent(data.filter(movie => movie.category === 'Movie'));
//             setTrending(false);
//             setTitle('Movies');
//         }

//         if (target.dataset.type === 'tv') {
//             btns[2].classList.add(navStyles.active);
//             setContent(data.filter(movie => movie.category === 'TV Series'));
//             setTitle('TV Series');
//         }

//         if (target.dataset.type === 'bookmarks') {
//             btns[3].classList.add(navStyles.active);
//         }
//     };

//     const handleSearch = function (event) {
//         setQuery(event.target.value);
//         console.log(query);
//     };

//     return (
//         <>
//             <main>
//                 <NavigationBar assets={assets} handleClick={handleClick} />
//                 <SearchForm assets={assets} handleSearch={handleSearch} />
//                 <Trending assets={assets} trending={trending} />
//                 <Movies assets={assets} movies={content} title={title} />
//             </main>
//         </>
//     );
// }
