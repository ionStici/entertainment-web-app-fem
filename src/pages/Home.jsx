import NavigationBar from '../components/NavigationBar';
import SearchForm from '../components/Search';
import Trending from '../components/Trending';
import Movies from '../components/Movies';

import { assets } from './../assets';
import data from './../data.json';

const Home = function () {
    const trending = data.filter(movie => movie.isTrending);
    const movies = data.filter(movie => !movie.isTrending);
    const title = 'Recommended for you';

    return (
        <>
            <NavigationBar assets={assets} />
            <SearchForm assets={assets} />
            <Trending assets={assets} trending={trending} />
            <Movies assets={assets} movies={movies} title={title} />
        </>
    );
};

export default Home;
