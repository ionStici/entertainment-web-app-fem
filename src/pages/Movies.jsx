import NavigationBar from '../components/NavigationBar';
import SearchForm from '../components/Search';
import Movies from '../components/Movies';

import data from './../data.json';
import { assets } from '../assets';

const MoviesPage = function () {
    const title = 'Movies';
    const movies = data.filter(movie => movie.category === 'Movie');

    return (
        <>
            <NavigationBar />
            <SearchForm />
            <Movies assets={assets} movies={movies} title={title} />
        </>
    );
};

export default MoviesPage;
