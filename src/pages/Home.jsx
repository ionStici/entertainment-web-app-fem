import NavigationBar from '../components/NavigationBar';
import SearchForm from '../components/Search';
import Trending from '../components/Trending';
import Movies from '../components/Movies';

import data from './../data.json';
import { assets } from './../assets';

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
