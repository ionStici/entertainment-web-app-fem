import NavigationBar from '../components/Navigation';
import SearchForm from '../components/Search';
import Trending from '../components/Trending';
import Movies from '../components/Media';

import data from '../data.json';
import { assets } from '../assets';

const HomePage = function () {
    const trending = data.filter(movie => movie.isTrending);
    const movies = data.filter(movie => !movie.isTrending);
    const title = 'Recommended for you';

    return (
        <>
            <NavigationBar />
            <SearchForm />
            <Trending assets={assets} trending={trending} />
            <Movies assets={assets} movies={movies} title={title} />
        </>
    );
};

export default HomePage;
