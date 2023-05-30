import NavigationBar from '../components/Navigation';
import SearchForm from '../components/Search';
import Movies from '../components/Media';

import data from '../data.json';
import { assets } from '../assets';

const MoviesPage = function () {
    const title = 'Movies';
    const movies = data.filter(movie => movie.category === 'Movie');

    return (
        <>
            <main>
                <NavigationBar />
                <SearchForm />
                <Movies assets={assets} movies={movies} title={title} />
            </main>
        </>
    );
};

export default MoviesPage;
