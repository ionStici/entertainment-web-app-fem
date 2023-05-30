import NavigationBar from '../components/Navigation';
import SearchForm from '../components/Search';
import Movies from '../components/Media';

import data from './../data.json';
import { assets } from '../assets';

const TvSeriesPage = function () {
    const title = 'TV Series';
    const movies = data.filter(movie => movie.category === 'TV Series');

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

export default TvSeriesPage;
