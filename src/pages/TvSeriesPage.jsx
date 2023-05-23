import NavigationBar from '../components/NavigationBar';
import SearchForm from '../components/Search';
import Movies from '../components/Movies';

import data from './../data.json';
import { assets } from './../assets';

const TvSeriesPage = function () {
    const title = 'TV Series';
    const movies = data.filter(movie => movie.category === 'TV Series');

    return (
        <>
            <NavigationBar />
            <SearchForm />
            <Movies assets={assets} movies={movies} title={title} />
        </>
    );
};

export default TvSeriesPage;
